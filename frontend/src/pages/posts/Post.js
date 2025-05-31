import React, { useState } from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import axios from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { MoreDropdown } from "../../components/MoreDropdown";

const Post = (props) => {
    const {
        id,
        author,
        user_id,
        profile_picture,
        title,
        game,
        content,
        image,
        updated_at,
        likes_count,
        has_liked,
        comments_count,
        postPage,
        setPost,
        imageSize = 55,
    } = props;

    const currentUser = useCurrentUser();
    const is_author = currentUser?.username === author;
    const history = useHistory();
    const [localLikesCount, setLocalLikesCount] = useState(likes_count);
    const [localHasLiked, setLocalHasLiked] = useState(has_liked);

    // Add loading state to disable like button while request is processing
    const [loading, setLoading] = useState(false);

    const handleEdit = () => {
        history.push(`/posts/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${id}/`);
            history.goBack();
        } catch (err) {
            // Handle error if needed
        }
    };

    // Handle like and unlike action
    const handleLike = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const { data } = await axios.post(`/likes/posts/${id}/like/`);

            // Update parent if provided
            if (setPost) {
                if (postPage) {
                    setPost((prevPost) => ({
                        ...prevPost,
                        likes_count: data.likes_count,
                        has_liked: data.has_liked,
                    }));
                } else {
                    setPost((prevPosts) => ({
                        ...prevPosts,
                        results: prevPosts.results.map((post) =>
                            post.id === id
                                ? {
                                    ...post,
                                    likes_count: data.likes_count,
                                    has_liked: data.has_liked,
                                }
                                : post
                        ),
                    }));
                }
            }

            // Update local UI immediately
            setLocalLikesCount(data.likes_count);
            setLocalHasLiked(data.has_liked);
        } catch (err) {
            console.log("Error liking post:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className={styles.Post}>
            <Card.Body>
                <Media className="align-items-center justify-content-between">
                    <Link to={`/users/${user_id}`}>
                        <Avatar
                            src={
                                profile_picture ||
                                "https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg"
                            }
                            height={imageSize}
                        />
                        {author}
                    </Link>
                    <div className="d-flex align-items-center">
                        <span>
                            {new Date(updated_at).toLocaleString(undefined, {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </span>
                        {is_author && postPage && (
                            <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
                        )}
                    </div>
                </Media>
            </Card.Body>
            <Link to={`/posts/${id}`}>
                <Card.Img src={image} alt={title} />
            </Link>
            <Card.Body>
                {title && <Card.Title className="text-center">{title}</Card.Title>}
                {game && <Card.Text>{game}</Card.Text>}
                {content && <Card.Text>{content}</Card.Text>}
                <div className={styles.PostBar}>
                    {is_author ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>You can't like your own post!</Tooltip>}
                        >
                            <i className="far fa-heart" />
                        </OverlayTrigger>
                    ) : currentUser ? (
                        <>
                            <span onClick={handleLike} style={{ pointerEvents: loading ? "none" : "auto" }}>
                                <i
                                    className={
                                        localHasLiked
                                            ? `fas fa-heart ${styles.Heart}`
                                            : `far fa-heart ${styles.HeartOutline}`
                                    }
                                />
                            </span>
                            <span>{localLikesCount}</span>
                        </>
                    ) : (
                        <OverlayTrigger placement="top" overlay={<Tooltip>Log in to like posts!</Tooltip>}>
                            <i className="far fa-heart" />
                        </OverlayTrigger>
                    )}
                    <Link to={`/posts/${id}`}>
                        <i className="far fa-comments" />
                    </Link>
                    {comments_count}
                </div>

            </Card.Body>
        </Card>
    );
};

export default Post;
