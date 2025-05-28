import React from "react";
import styles from "../../styles/User.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { Button } from "react-bootstrap";

const User = (props) => {
    const { user, mobile, imageSize = 55 } = props;
    const { id, following_id, image } = user;

    const currentUser = useCurrentUser();

    return (
        <div
            className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
        >
            <div>
                <Link className="align-self-center" to={`/users/${id}`}>
                    <Avatar
                        src={
                            image ||
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
                    !user.username &&
                    (following_id ? (
                        <Button
                            className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                            onClick={() => { }}
                        >
                            unfollow
                        </Button>
                    ) : (
                        <Button
                            className={`${btnStyles.Button} ${btnStyles.Blue}`}
                            onClick={() => { }}
                        >
                            follow
                        </Button>
                    ))}
            </div>
        </div>
    );
};

export default User;