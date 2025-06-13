import React, { useEffect, useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useHistory, useParams } from "react-router-dom";
import axios from "../../api/axiosDefaults";
import {
    useCurrentUser,
    useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import { useAlert } from "../../contexts/AlertContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

const UsernameForm = () => {
    // State to hold the new username input value
    const [username, setUsername] = useState("");

    // State for storing any validation or server errors
    const [errors, setErrors] = useState({});

    // Show alert
    const { showAlert } = useAlert();

    // React Router hooks for navigation and route params
    const history = useHistory();
    const { id } = useParams();

    // Context for current logged-in user info and updating it
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    // On mount, verify if the current user matches the id in URL
    useEffect(() => {
        if (currentUser?.id?.toString() !== id) {
            // Redirect if not the owner of this profile
            history.push("/");
        }
    }, [currentUser, history, id]);

    // Submit handler to save new username
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Simple client-side length validation
        if (username.length > 24) {
            setErrors({ username: ["Name too long. 24 characters maximum."] });
            return;
        }

        try {
            // PATCH request to update username on the backend
            await axios.patch("/dj-rest-auth/user/", {
                username,
            });

            // Update current user context with the new username
            setCurrentUser((prevUser) => ({
                ...prevUser,
                username,
            }));
            showAlert({ message: "Username successfully edited!", variant: "success" });

            // Navigate back after saving
            history.goBack();
        } catch (err) {
            console.log(err);
            // Show any server errors returned
            setErrors(err.response?.data || {});
        }
    };

    // Don’t render form until currentUser is loaded (avoids flicker)
    if (currentUser === undefined) {
        return null;
    }

    return (
        <Row>
            <Col className="py-2 mx-auto text-center" md={6}>
                <Container className={appStyles.Content}>
                    <Form onSubmit={handleSubmit} className="my-2">
                        <Form.Group>
                            <Form.Label>Change username</Form.Label>
                            <Form.Control
                                placeholder="username"
                                type="text"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                maxLength={24} // max length enforced in input
                                autoComplete="off"
                                spellCheck={false}
                            />
                        </Form.Group>

                        {/* Show any username errors */}
                        {errors?.username?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}

                        {/* Cancel button goes back */}
                        <Button
                            type="button"
                            className={`${btnStyles.Button} ${btnStyles.Blue} mr-2`}
                            onClick={() => history.goBack()}
                        >
                            cancel
                        </Button>

                        {/* Save button disabled if username is empty or whitespace */}
                        <Button
                            className={`${btnStyles.Button} ${btnStyles.Blue}`}
                            type="submit"
                            disabled={!username.trim()}
                        >
                            save
                        </Button>
                    </Form>
                </Container>
            </Col>
        </Row>
    );
};

export default UsernameForm;
