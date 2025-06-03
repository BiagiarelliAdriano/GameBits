import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/UserPage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import PopularUsers from "./PopularUsers";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "../../api/axiosDefaults";
import { useUserData, useSetUserData } from "../../contexts/UserDataContext";
import { Image } from "react-bootstrap";

function UserPage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const { id } = useParams();
    const setUserData = useSetUserData();
    const { pageUser } = useUserData();
    const user = pageUser?.results?.[0];

    console.log("Context pageUser:", pageUser);
    console.log("Extracted user:", user);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{ data: pageUser }] = await Promise.all([
                    axios.get(`/api/users/${id}/`),
                ]);
                console.log("Fetched pageUser:", pageUser);
                setUserData(prevState => ({
                    ...prevState,
                    pageUser: { results: [pageUser] },
                }));
                setHasLoaded(true);
            } catch (err) {
                console.log("Error fetching user data:", err);
            }
        }
        fetchData();
    }, [id, setUserData]);

    console.log("Username:", user?.username);
    console.log("Post Count:", user?.posts_count);

    const mainProfile = (
        <>
            <Row noGutters className="px-3 text-center">
                <Col lg={3} className="text-lg-left">
                    <Image
                        className={styles.ProfilePicture}
                        roundedCircle
                        src={user?.profile_picture ||
                            "https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg"}
                    />
                </Col>
                <Col lg={6}>
                    <h3 className="m-2">{user?.username}</h3>
                    <Row className="justify-content-center no-gutters">
                        <Col xs={3} className="my-2">
                            <div>{user?.posts_count}</div>
                            <div>posts</div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} className="text-lg-right">
                    <p>Follow button</p>
                </Col>
                <Col className="p-3">Profile content</Col>
            </Row>
        </>
    );

    const mainProfilePosts = (
        <>
            <hr />
            <p className="text-center">Profile owner's posts</p>
            <hr />
        </>
    );

    return (
        <Row>
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <PopularUsers mobile />
                <Container className={appStyles.Content}>
                    {hasLoaded ? (
                        <>
                            {mainProfile}
                            {mainProfilePosts}
                        </>
                    ) : (
                        <Asset spinner />
                    )}
                </Container>
            </Col>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                <PopularUsers />
            </Col>
        </Row>
    );
}

export default UserPage;