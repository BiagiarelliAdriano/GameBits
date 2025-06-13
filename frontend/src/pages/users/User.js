import React, { useState } from "react";
import styles from "../../styles/User.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { Button } from "react-bootstrap";

const User = (props) => {
    const { user, mobile, imageSize = 55, handleFollowToggle } = props;
    const { id, following_id, profile_picture } = user || {};

    const currentUser = useCurrentUser();
    const [loading, setLoading] = useState(false);

    // Handler to toggle follow/unfollow state with loading prevention
    const onToggleClick = async () => {
        if (!handleFollowToggle || loading) return;
        setLoading(true);
        await handleFollowToggle(id);
        setLoading(false);
    };

    // Determine if the follow button should be shown:
    // Only show if logged in, not current user's own profile
    const showFollowButton =
        currentUser && user.username !== currentUser.username;

    return (
        <div
            className={`my-3 d-flex align-items-center ${mobile ? "flex-column text-center" : ""
                }`}
        >
            {/* User avatar linking to their profile */}
            <div>
                <Link className="align-self-center" to={`/users/${id}`}>
                    <Avatar
                        src={
                            profile_picture ||
                            "https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg"
                        }
                        height={imageSize}
                        alt={`${user.username}'s profile picture`}
                    />
                </Link>
            </div>

            {/* Username with word-break for long names */}
            <div className={`mx-2 ${styles.WordBreak}`}>
                <strong>{user.username}</strong>
            </div>

            {/* Follow/Unfollow Button */}
            <div
                className={`${mobile ? "w-100 mt-2" : "text-right ml-auto"
                    }`}
            >
                {showFollowButton && (
                    <Button
                        className={`${btnStyles.Button} ${following_id ? btnStyles.BlackOutline : btnStyles.Blue
                            } ${mobile ? "w-100" : ""}`}
                        onClick={onToggleClick}
                        disabled={loading}
                        size={mobile ? "lg" : "sm"} // bigger tap target on mobile
                    >
                        {loading
                            ? following_id
                                ? "Unfollowing..."
                                : "Following..."
                            : following_id
                                ? "Unfollow"
                                : "Follow"}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default User;
