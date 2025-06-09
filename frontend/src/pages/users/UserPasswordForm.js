import React, { useEffect, useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import { useHistory, useParams } from "react-router-dom";
import axios from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

const UserPasswordForm = () => {
    const history = useHistory();
    const { id } = useParams();
    const currentUser = useCurrentUser();

    const [userData, setUserData] = useState({
        new_password1: "",
        new_password2: "",
    });
    const { new_password1, new_password2 } = userData;

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        if (currentUser?.user_id?.toString() !== id) {
            // redirect user if they are not the owner of this profile
            history.push("/");
        }
    }, [currentUser, history, id]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Client-side password match validation
        if (new_password1 !== new_password2) {
            setErrors({ new_password2: ["Passwords do not match."] });
            return;
        }

        try {
            await axios.post("/dj-rest-auth/password/change/", userData);
            history.goBack();
        } catch (err) {
            console.log(err);
            setErrors(err.response?.data || { non_field_errors: ["Something went wrong. Please try again."] });
        }
    };

    // Disable save button if passwords are empty or don't match
    const isSaveDisabled =
        !new_password1.trim() ||
        !new_password2.trim() ||
        new_password1 !== new_password2;

    return (
        <Row>
            <Col className="py-2 mx-auto text-center" md={6}>
                <Container className={appStyles.Content}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>New password</Form.Label>
                            <Form.Control
                                placeholder="new password"
                                type="password"
                                value={new_password1}
                                onChange={handleChange}
                                name="new_password1"
                                autoComplete="new-password"
                            />
                        </Form.Group>
                        {errors?.new_password1?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}
                        <Form.Group>
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control
                                placeholder="confirm new password"
                                type="password"
                                value={new_password2}
                                onChange={handleChange}
                                name="new_password2"
                                autoComplete="new-password"
                            />
                        </Form.Group>
                        {errors?.new_password2?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}
                        {errors?.non_field_errors?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}
                        <Button
                            type="button"
                            className={`${btnStyles.Button} ${btnStyles.Blue}`}
                            onClick={() => history.goBack()}
                        >
                            cancel
                        </Button>
                        <Button
                            type="submit"
                            className={`${btnStyles.Button} ${btnStyles.Blue}`}
                            disabled={isSaveDisabled}
                        >
                            save
                        </Button>
                    </Form>
                </Container>
            </Col>
        </Row>
    );
};

export default UserPasswordForm;
