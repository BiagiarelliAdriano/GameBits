import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Button, Image } from "react-bootstrap";

import Asset from "../../components/Asset";

import styles from "../../styles/UserPage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import PopularUsers from "./PopularUsers";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom";
import axios from "../../api/axiosDefaults";
import { useUserData, useSetUserData } from "../../contexts/UserDataContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";
import { fetchMoreData } from "../../utils/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function UserPage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [userPosts, setUserPosts] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const { id } = useParams();

    const setUserData = useSetUserData();
    const { pageUser, handleFollowToggle } = useUserData();

    // Extract the user object or fallback to null
    const user = pageUser?.results?.[0] || null;

    const is_author = currentUser?.username === user?.username;

    useEffect(() => {
        if (!id) return;

        setUserPosts({ results: [] });
        setHasLoaded(false);

        const fetchData = async () => {
            try {
                const [{ data: pageUserData }, { data: userPostsData }] = await Promise.all([
                    axios.get(`users/${id}/`),
                    axios.get(`/posts/?author=${id}`),
                ]);
                setUserData(prev => ({
                    ...prev,
                    pageUser: { results: [pageUserData] },
                }));
                setUserPosts(userPostsData);
                setHasLoaded(true);
            } catch (err) {
                console.error("Error fetching user data:", err);
            }
        };

        fetchData();
    }, [id, setUserData]);

    const onFollowToggle = async () => {
        if (!user) return;
        await handleFollowToggle(user.id);
    };

    const mainProfile = (
        <Row noGutters className="px-3 text-center">
            <Col lg={3} className="text-lg-left">
                <Image
                    className={styles.ProfilePicture}
                    roundedCircle
                    src={
                        user?.profile_picture_url ||
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
                        <div>{is_author ? user?.followers : user?.followers}</div>
                        <div>followers</div>
                    </Col>
                    <Col xs={3} className="my-2">
                        <div>{user?.posts_count ?? 0}</div>
                        <div>posts</div>
                    </Col>
                    <Col xs={3} className="my-2">
                        <div>{is_author ? currentUser?.following : user?.following}</div>
                        <div>following</div>
                    </Col>
                </Row>
            </Col>
            <Col lg={3} className="text-lg-right">
                {currentUser && !is_author && (
                    user?.following_id ? (
                        <Button
                            className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                            onClick={onFollowToggle}
                        >
                            unfollow
                        </Button>
                    ) : (
                        <Button
                            className={`${btnStyles.Button} ${btnStyles.Black}`}
                            onClick={onFollowToggle}
                        >
                            follow
                        </Button>
                    )
                )}
            </Col>
            {user?.content && <Col className="p-3">{user.content}</Col>}
        </Row>
    );

    const mainProfilePosts = (
        <>
            <hr />
            <p className="text-center">{user?.username}'s posts</p>
            <hr />
            {userPosts.results.length ? (
                <InfiniteScroll
                    children={userPosts.results.map((post) => (
                        <Post key={post.id} {...post} setPosts={setUserPosts} />
                    ))}
                    dataLength={userPosts.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!userPosts.next}
                    next={() => fetchMoreData(userPosts, setUserPosts)}
                />
            ) : (
                <div className="text-center p-3">
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="3x" />
                    <p>No results found, {user?.username} hasn't posted yet.</p>
                </div>
            )}
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
