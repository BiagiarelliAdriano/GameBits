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
        postId, // New prop: id of the post this comment belongs to
    } = props;

    const [showEditForm, setShowEditForm] = useState(false);

    const currentUser = useCurrentUser();
    const is_author = currentUser?.username === author;

    const handleDelete = async () => {
        try {
            await axios.delete(`/comments/${id}`);

            setPost(prevPost => {
                if (!prevPost) return prevPost;
                if (prevPost.hasOwnProperty("results")) {
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
                if (prevPost.id === postId) {
                    return {
                        ...prevPost,
                        comments_count: Math.max(0, prevPost.comments_count - 1),
                    };
                }
                return prevPost;
            });

            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.filter((comment) => comment.id !== id),
            }));
        } catch (err) {
            console.log("Error deleting comment:", err);
        }
    };

    return (
        <>
            <hr />
            <Media>
                <Link to={`/users/${author_id}`}>
                    <Avatar src={profile_picture} />
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <span className={styles.Author}>{author}</span>
                    <span className={styles.Date}>{updated_at}</span>
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
