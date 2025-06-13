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

    // Store validation and server errors
    const [errors, setErrors] = useState({});
    // Store dynamic status messages for UX
    const [statusMessage, setStatusMessage] = useState(null);
    // Track form submitting state
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Update form inputs on change
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });

        // Clear previous errors and status on input change for better UX
        setErrors({});
        setStatusMessage(null);
    };

    // Redirect if current user is not profile owner
    useEffect(() => {
        if (currentUser?.id?.toString() !== id) {
            history.push("/");
        }
    }, [currentUser, id, history]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Client-side password match validation
        if (new_password1 !== new_password2) {
            setErrors({ new_password2: ["Passwords do not match."] });
            setStatusMessage(null);
            return;
        }

        // Indicate submission is in progress
        setIsSubmitting(true);
        setErrors({});
        setStatusMessage(null);

        try {
            // Call backend to change password
            await axios.post("/dj-rest-auth/password/change/", userData);
            // Show success message
            setStatusMessage({ type: "success", text: "Password changed successfully!" });
            setIsSubmitting(false);
            // After short delay, navigate back
            setTimeout(() => {
                history.goBack();
            }, 1500);
        } catch (err) {
            setIsSubmitting(false);
            // Show server errors or generic error message
            setErrors(
                err.response?.data || {
                    non_field_errors: ["Something went wrong. Please try again."],
                }
            );
            setStatusMessage(null);
        }
    };

    // Disable Save button if passwords empty or don't match or form is submitting
    const isSaveDisabled =
        !new_password1.trim() ||
        !new_password2.trim() ||
        new_password1 !== new_password2 ||
        isSubmitting;

    return (
        <Row>
            <Col className="py-2 mx-auto text-center" md={6}>
                <Container className={appStyles.Content}>
                    <Form onSubmit={handleSubmit}>
                        {/* New password input */}
                        <Form.Group>
                            <Form.Label>New password</Form.Label>
                            <Form.Control
                                placeholder="new password"
                                type="password"
                                value={new_password1}
                                onChange={handleChange}
                                name="new_password1"
                                autoComplete="new-password"
                                disabled={isSubmitting}
                            />
                        </Form.Group>

                        {/* Show errors related to new_password1 */}
                        {errors?.new_password1?.map((message, idx) => (
                            <Alert key={idx} variant="warning" className="mt-1">
                                {message}
                            </Alert>
                        ))}

                        {/* Confirm password input */}
                        <Form.Group>
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control
                                placeholder="confirm new password"
                                type="password"
                                value={new_password2}
                                onChange={handleChange}
                                name="new_password2"
                                autoComplete="new-password"
                                disabled={isSubmitting}
                            />
                        </Form.Group>

                        {/* Show errors related to new_password2 */}
                        {errors?.new_password2?.map((message, idx) => (
                            <Alert key={idx} variant="warning" className="mt-1">
                                {message}
                            </Alert>
                        ))}

                        {/* Show any other non-field errors */}
                        {errors?.non_field_errors?.map((message, idx) => (
                            <Alert key={idx} variant="warning" className="mt-1">
                                {message}
                            </Alert>
                        ))}

                        {/* Dynamic status message (success or info) */}
                        {statusMessage && (
                            <Alert
                                variant={statusMessage.type === "success" ? "success" : "info"}
                                className="mt-3"
                            >
                                {statusMessage.text}
                            </Alert>
                        )}

                        {/* Cancel button */}
                        <Button
                            type="button"
                            className={`${btnStyles.Button} ${btnStyles.Blue} mr-2`}
                            onClick={() => history.goBack()}
                            disabled={isSubmitting}
                        >
                            cancel
                        </Button>

                        {/* Save button */}
                        <Button
                            type="submit"
                            className={`${btnStyles.Button} ${btnStyles.Blue}`}
                            disabled={isSaveDisabled}
                        >
                            {isSubmitting ? "Saving..." : "save"}
                        </Button>
                    </Form>
                </Container>
            </Col>
        </Row>
    );
};

export default UserPasswordForm;
