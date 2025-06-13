import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import axios from "../../api/axiosDefaults";

function CommentCreateForm(props) {
    // State to track comment content input by the user
    const [content, setContent] = useState("");
    const { post, setPost, setComments, profilePicture } = props || {};
    // Tracks whether form submission is in progress to disable input/button
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Holds any error message from submission failure
    const [error, setError] = useState(null);
    const currentUser = useCurrentUser();

    // Update content state as user types; clear error if any
    const handleChange = (event) => {
        setContent(event.target.value);
        if (error) setError(null);
    };

    // Handles form submission to create a new comment via API
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!content.trim()) return; // Prevent submitting empty comments

        setIsSubmitting(true);
        setError(null);

        try {
            // Post comment to backend API
            const { data } = await axios.post("/comments/", {
                content,
                post,
            });

            // Prepend the new comment to the existing comments list
            setComments((prevComments) => ({
                ...prevComments,
                results: [data, ...prevComments.results],
            }));

            // Increment the comments count on the parent post
            setPost((prevPost) => ({
                ...prevPost,
                comments_count: prevPost.comments_count + 1,
            }));

            // Clear the textarea input after successful submission
            setContent("");
        } catch (err) {
            console.error(err);
            setError("Failed to post comment. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form className="mt-2" onSubmit={handleSubmit}>
            <Form.Group>
                <InputGroup>
                    {/* Link to current user's profile with avatar */}
                    <Link to={`/users/${currentUser?.id}`}>
                        <Avatar src={profilePicture} />
                    </Link>
                    {/* Textarea input for new comment */}
                    <Form.Control
                        className={styles.Form}
                        placeholder="my comment..."
                        as="textarea"
                        value={content}
                        onChange={handleChange}
                        rows={2}
                        aria-label="Write a comment"
                        disabled={isSubmitting}
                    />
                </InputGroup>
            </Form.Group>

            {/* Show error message if submission failed */}
            {error && <div role="alert" className="text-danger mb-2">{error}</div>}

            {/* Submit button disabled if no input or submitting */}
            <button
                className={`${styles.Button} btn d-block ml-auto`}
                disabled={!content.trim() || isSubmitting}
                type="submit"
            >
                {isSubmitting ? "Posting..." : "post"}
            </button>
        </Form>
    );
}

export default CommentCreateForm;
