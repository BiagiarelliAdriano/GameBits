import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";

import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import MoreDropdown from "../../components/MoreDropdown";
import axios from "../../api/axiosDefaults";
import CommentEditForm from "./CommentEditForm";

import styles from "../../styles/Comment.module.css";


const Comment = (props) => {
    const {
        user_id,
        profile_picture,
        author,
        updated_at,
        content,
        id,
        setPost,
        setComments,
    } = props;

    const [showEditForm, setShowEditForm] = useState(false);

    const currentUser = useCurrentUser();
    const is_author = currentUser?.username === author;

    const handleDelete = async () => {
        try {
            await axios.delete(`/comments/${id}`);
            setPost(prevPost => ({
                results: prevPost.results.map(post => ({
                    ...post,
                    comments_count: Math.max(0, post.comments_count - 1)
                }))
            }));

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
                <Link to={`/users/${user_id}`}>
                    <Avatar src={profile_picture} />
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <span className={styles.Author}>{author}</span>
                    <span className={styles.Date}>{updated_at}</span>
                    {showEditForm ? (
                        <CommentEditForm
                            id={id}
                            user_id={user_id}
                            content={content}
                            profile_picture={profile_picture}
                            setComments={setComments}
                            setShowEditForm={setShowEditForm}
                        />
                    ) : (
                        <p>{content}</p>
                    )}
                </Media.Body>
                {is_author && !showEditForm && (
                    <MoreDropdown
                        handleEdit={() => setShowEditForm(true)}
                        handleDelete={handleDelete}
                    />
                )}
            </Media>
        </>
    );
};

export default Comment;