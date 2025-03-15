import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";

const Comment = (props) => {
    const { user_id, profile_picture, author, updated_at, content } = props;

    return (
        <div>
            <hr />
            <Media>
                <Link to={`/users/${user_id}`}>
                    <Avatar src={profile_picture} />
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <span className={styles.Author}>{author}</span>
                    <span className={styles.Date}>{updated_at}</span>
                    <p>{content}</p>
                </Media.Body>
            </Media>
        </div>
    );
};

export default Comment;