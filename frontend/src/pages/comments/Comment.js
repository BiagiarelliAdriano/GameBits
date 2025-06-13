import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";

import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";
import axios from "../../api/axiosDefaults";
import CommentEditForm from "./CommentEditForm";

import styles from "../../styles/Comment.module.css";
import dropdownStyles from "../../styles/MoreDropdown.module.css";
import { useAlert } from "../../contexts/AlertContext";

const Comment = (props) => {
    const {
        author_id,
        profile_picture,
        author,
        updated_at,
        content,
        id,
        setPost,
        setComments,
        postId,
    } = props;

    // Controls whether the edit form is shown or not
    const [showEditForm, setShowEditForm] = useState(false);

    // Get current logged-in user to check permissions
    const currentUser = useCurrentUser();
    // Determine if the current user is the author of this comment
    const is_author = currentUser?.username === author;

    // Fallback profile picture URL if none provided
    const defaultProfilePic = "https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg";

    // Get global alert functions from context
    const { showAlert } = useAlert();

    // Handler to delete the comment and update parent states accordingly
    const handleDelete = async () => {
        try {
            await axios.delete(`/comments/${id}`);

            // Update the parent post's comments count safely, handling single post or paginated results
            setPost(prevPost => {
                if (!prevPost) return prevPost;

                if (prevPost.hasOwnProperty("results")) {
                    // If paginated list of posts, update the matching post's comments_count
                    return {
                        ...prevPost,
                        results: prevPost.results.map(post =>
                            post.id === postId
                                ? {
                                    ...post,
                                    comments_count: Math.max(0, post.comments_count - 1),
                                }
                                : post
                        ),
                    };
                }
                // Single post object case
                if (prevPost.id === postId) {
                    return {
                        ...prevPost,
                        comments_count: Math.max(0, prevPost.comments_count - 1),
                    };
                }
                return prevPost;
            });

            // Remove the deleted comment from the comments list
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.filter(comment => comment.id !== id),
            }));

            // Show success alert globally
            showAlert({ message: "Comment deleted successfully!", variant: "success" });

        } catch (err) {
            console.error("Error deleting comment:", err);

            // Show error alert globally
            showAlert({ message: "Failed to delete comment. Please try again.", variant: "danger" });
        }
    };

    return (
        <>
            <hr />
            <Media>
                {/* Link to author's profile */}
                <Link to={`/users/${author_id}`}>
                    <Avatar src={profile_picture || defaultProfilePic} />
                </Link>

                <Media.Body className="align-self-center ml-2">
                    <span className={styles.Author}>{author}</span>
                    <span className={styles.Date}>{updated_at}</span>

                    {/* Toggle between edit form and comment content display */}
                    {showEditForm ? (
                        <div className={dropdownStyles.DropdownMenu}>
                            <CommentEditForm
                                id={id}
                                author_id={author_id}
                                content={content}
                                profile_picture={profile_picture}
                                setComments={setComments}
                                setShowEditForm={setShowEditForm}
                            />
                        </div>
                    ) : (
                        <p>{content}</p>
                    )}
                </Media.Body>

                {/* Show edit/delete dropdown only to the comment author when not editing */}
                {is_author && !showEditForm && (
                    <div className="ml-auto">
                        <MoreDropdown
                            handleEdit={() => setShowEditForm(true)}
                            handleDelete={handleDelete}
                        />
                    </div>
                )}
            </Media>
        </>
    );
};

export default Comment;
