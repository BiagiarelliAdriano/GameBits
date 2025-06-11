import React, { useState } from "react";
import styles from "../../styles/User.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { Button } from "react-bootstrap";

const User = (props) => {
    const { user, mobile, imageSize = 55, handleFollowToggle } = props;
    const { id, following_id, profile_picture } = user;

    const currentUser = useCurrentUser();
    const [loading, setLoading] = useState(false);

    const onToggleClick = async () => {
        if (!handleFollowToggle || loading) return;
        setLoading(true);
        await handleFollowToggle(id);
        setLoading(false);
    };

    return (
        <div
            className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
        >
            <div>
                <Link className="align-self-center" to={`/users/${id}`}>
                    <Avatar
                        src={
                            profile_picture ||
                            "https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg"
                        }
                        height={imageSize}
                    />
                </Link>
            </div>
            <div className={`mx-2 ${styles.WordBreak}`}>
                <strong>{user.username}</strong>
            </div>
            <div className={`text-right ${!mobile && "ml-auto"}`}>
                {!mobile &&
                    currentUser &&
                    user.username !== currentUser.username && (
                        following_id ? (
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                                onClick={onToggleClick}
                                disabled={loading}
                            >
                                {loading ? "Unfollowing..." : "unfollow"}
                            </Button>
                        ) : (
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                                onClick={onToggleClick}
                                disabled={loading}
                            >
                                {loading ? "Following..." : "follow"}
                            </Button>
                        )
                    )}
            </div>
        </div>
    );
};

export default User;
