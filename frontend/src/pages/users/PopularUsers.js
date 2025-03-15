import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const PopularUsers = ({ mobile }) => {
    const [userData, setUserData] = useState({
        pageUser: { results: [] },
        popularUsers: { results: [] },
    });
    const { popularUsers } = userData;
    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axios.get(
                    "/users/?ordering=-level"
                );
                setUserData((prevState) => ({
                    ...prevState,
                    popularUsers: data,
                }));
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [currentUser]);

    return (
        <Container
            className={`${appStyles.Content} ${
                mobile && 'd-lg-none text-center mb-3'
            }`}
        >
            {popularUsers.results.length ? (
                <>
                    <p>Highest Level Users.</p>
                    {mobile ? (
                        <div className="d-flex justify-content-around">
                            {popularUsers.results.slice(0, 4).map((user) => (
                                <p key={user.id}>{user.username}</p>
                            ))}
                        </div>
                    ) : (
                        popularUsers.results.map((user) => (
                            <p key={user.id}>{user.username}</p>
                        ))
                    )}
                </>
            ) : (
                <Asset spinner />
            )}
        </Container>
    );
};

export default PopularUsers;