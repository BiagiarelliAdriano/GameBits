import React from "react";
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
        likes,
        likes_count,
        has_liked,
        comments_count,
        postPage,
        setPost,
    } = props;

    const currentUser = useCurrentUser();
    const is_author = currentUser?.username === author;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/posts/${id}/edit`)
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${id}/`);
            history.goBack();
        } catch (err) {

        }
    }

    // Handle like action
    const handleLike = async () => {
        try {
            console.log("Post ID being liked:", id);
            const { data } = await axios.post(`/posts/${id}/like/`);
            console.log("Post data after like:", data);

            setPost((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, likes_count: data.likes_count, has_liked: data.has_liked }
                        : post;
                }),
            }));
        } catch (err) {
            console.log("Error liking post:", err);
        }
    };


    // Handle unlike action
    const handleUnlike = async () => {
        try {
            await axios.delete(`/likes/${likes.id}/`);
            setPost((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, likes_count: post.likes_count - 1, has_liked: false } // Update likes_count and has_liked
                        : post;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Card className={styles.Post}>
            <Card.Body>
                <Media className="align-items-center justify-content-between">
                    <Link to={`/users/${user_id}`}>
                        <Avatar src={profile_picture} height={55} />
                        {author}
                    </Link>
                    <div className="d-flex align-items-center">
                        <span>{updated_at}</span>
                        {is_author && postPage && (
                            <MoreDropdown
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
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
                    ) : has_liked ? (
                        <span onClick={handleUnlike}>
                            <i className={`fas fa-heart ${styles.Heart}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleLike}>
                            <i className={`far fa-heart ${styles.HeartOutline}`} />
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in to like posts!</Tooltip>}
                        >
                            <i className="far fa-heart" />
                        </OverlayTrigger>
                    )}
                    {likes_count}
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
