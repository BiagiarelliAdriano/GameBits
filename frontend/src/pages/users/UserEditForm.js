import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import axios from "../../api/axiosDefaults";
import {
    useCurrentUser,
    useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

const UserEditForm = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const { id } = useParams();
    const history = useHistory();
    const imageFile = useRef();

    const [userData, setUserData] = useState({
        bio: "",
        profile_picture: "",
    });
    const { bio, profile_picture } = userData;

    const [errors, setErrors] = useState({});

    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        const handleMount = async () => {
            if (currentUser?.id?.toString() === id) {
                try {
                    const { data } = await axios.get(`/users/${id}/`);
                    const { bio, profile_picture } = data;
                    if (isMounted.current) {
                        setUserData({
                            bio,
                            profile_picture: profile_picture || "",
                        });
                    }
                } catch (err) {
                    console.log(err);
                    history.push("/");
                }
            } else {
                history.push("/");
            }
        };

        handleMount();
    }, [currentUser, history, id]);

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("bio", bio);

        if (imageFile.current?.files[0]) {
            formData.append("profile_picture", imageFile.current.files[0]);
        }

        try {
            const { data } = await axios.patch(`/users/${id}/`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            // 1. Update both user states
            setUserData({
                bio: data.bio,
                profile_picture: data.profile_picture, // Use backend's URL
            });

            setCurrentUser((prevUser) => ({
                ...prevUser,
                profile_picture: data.profile_picture,
            }));

            // 2. Force a delay to ensure state updates propagate
            setTimeout(() => {
                history.goBack();
            }, 100);

        } catch (err) {
            console.error("Error:", err.response?.data);
            setErrors(err.response?.data || {});
        }
    };

    const textFields = (
        <>
            <Form.Group>
                <Form.Label>Bio</Form.Label>
                <Form.Control
                    as="textarea"
                    value={bio}
                    onChange={handleChange}
                    name="bio"
                    rows={7}
                />
                {errors?.bio?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
            </Form.Group>

            <Button
                type="button"
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => history.goBack()}
            >
                cancel
            </Button>
            <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
                save
            </Button>
        </>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
                    <Container className={appStyles.Content}>
                        <Form.Group>
                            <figure>
                                <Image
                                    src={
                                        profile_picture
                                            ? profile_picture
                                            : "https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg"
                                    }
                                    fluid
                                />
                            </figure>
                            {errors?.profile_picture?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}
                            <div>
                                <Form.Label
                                    className={`${btnStyles.Button} ${btnStyles.Blue} btn my-auto`}
                                    htmlFor="image-upload"
                                >
                                    Change the image
                                </Form.Label>
                            </div>
                            <Form.File
                                id="image-upload"
                                ref={imageFile}
                                accept="image/*"
                                onChange={(e) => {
                                    if (e.target.files.length) {
                                        setUserData({
                                            ...userData,
                                            profile_picture: URL.createObjectURL(e.target.files[0]),
                                        });
                                    }
                                }}
                            />
                        </Form.Group>
                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
                    <Container className={appStyles.Content}>{textFields}</Container>
                </Col>
            </Row>
        </Form>
    );
};

export default UserEditForm;
