import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "../../api/axiosDefaults";

import styles from "../../styles/CommentCreateEditForm.module.css";

function CommentEditForm({ id, content, setShowEditForm, setComments, className }) {
    // Local state to track updated comment content
    const [formContent, setFormContent] = useState(content);
    // Track submitting state to prevent multiple requests
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Track potential error state
    const [error, setError] = useState(null);

    // Handle textarea changes
    const handleChange = (event) => {
        setFormContent(event.target.value);
        if (error) setError(null);
    };

    // Handle form submission to update comment via API
    const handleSubmit = async (event) => {
        event.preventDefault();

        const trimmedContent = formContent.trim();
        if (!trimmedContent) return; // Prevent submitting empty content

        setIsSubmitting(true);
        setError(null);

        try {
            await axios.put(`/comments/${id}/`, { content: trimmedContent });

            // Update local state to reflect edited comment immediately
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.map((comment) =>
                    comment.id === id
                        ? { ...comment, content: trimmedContent, updated_at: "now" }
                        : comment
                ),
            }));

            setShowEditForm(false);
        } catch (err) {
            console.error(err);
            setError("Failed to update comment. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className={className}>
            <Form.Group className="pr-1">
                <Form.Control
                    className={styles.Form}
                    as="textarea"
                    value={formContent}
                    onChange={handleChange}
                    rows={2}
                    aria-label="Edit comment"
                    disabled={isSubmitting}
                />
            </Form.Group>

            {/* Display error message if any */}
            {error && <div role="alert" className="text-danger mb-2">{error}</div>}

            <div className="text-right">
                <button
                    className={styles.Button}
                    onClick={() => setShowEditForm(false)}
                    type="button"
                    disabled={isSubmitting}
                >
                    cancel
                </button>
                <button
                    className={styles.Button}
                    disabled={!formContent.trim() || isSubmitting}
                    type="submit"
                >
                    {isSubmitting ? "Saving..." : "save"}
                </button>
            </div>
        </Form>
    );
}

export default CommentEditForm;
