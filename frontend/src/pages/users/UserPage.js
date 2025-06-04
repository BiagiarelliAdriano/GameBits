import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";

import Asset from "../../components/Asset";

import styles from "../../styles/UserPage.module.css";
import appStyles from "../../App.module.css";

import PopularUsers from "./PopularUsers";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom";
import axios from "../../api/axiosDefaults";
import { useUserData, useSetUserData } from "../../contexts/UserDataContext";

function UserPage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const { id } = useParams();
    const setUserData = useSetUserData();
    const { pageUser } = useUserData();

    // Extract the user object or fallback to null
    const user = pageUser?.results?.[0] || null;

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            try {
                const { data: pageUserData } = await axios.get(`users/${id}/`);
                setUserData(prev => ({
                    ...prev,
                    pageUser: { results: [pageUserData] },
                }));
                setHasLoaded(true);
            } catch (err) {
                // You might want to handle errors differently depending on UX goals
                console.error("Error fetching user data:", err);
            }
        };

        fetchData();
    }, [id, setUserData]);

    const mainProfile = (
        <Row noGutters className="px-3 text-center">
            <Col lg={3} className="text-lg-left">
                <Image
                    className={styles.ProfilePicture}
                    roundedCircle
                    src={
                        currentUser?.profile_picture_url ||
                        "https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg"
                    }
                    height="40"
                    alt="Profile"
                />
            </Col>
            <Col lg={6}>
                <h3 className="m-2">{user?.username || "User"}</h3>
                <Row className="justify-content-center no-gutters">
                    <Col xs={3} className="my-2">
                        <div>{user?.posts_count ?? 0}</div>
                        <div>posts</div>
                    </Col>
                </Row>
            </Col>
            <Col lg={3} className="text-lg-right">
                <p>Follow button</p>
            </Col>
            <Col className="p-3">Profile content</Col>
        </Row>
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
