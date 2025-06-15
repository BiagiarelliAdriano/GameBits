import React, { useEffect, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Button, Image } from 'react-bootstrap';

import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Asset from '../../components/Asset';

import styles from '../../styles/UserPage.module.css';
import appStyles from '../../App.module.css';
import btnStyles from '../../styles/Button.module.css';

import PopularUsers from './PopularUsers';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import axios from '../../api/axiosDefaults';
import { useUserData, useSetUserData } from '../../contexts/UserDataContext';
import Post from '../posts/Post';
import { fetchMoreData } from '../../utils/utils';
import { UserEditDropdown } from '../../components/MoreDropdown';

function UserPage() {
  // Local state to track posts and loading state
  const [hasLoaded, setHasLoaded] = useState(false);
  const [userPosts, setUserPosts] = useState({ results: [] });

  // Current logged-in user and URL param id
  const currentUser = useCurrentUser();
  const { id } = useParams();

  // User data context hooks
  const setUserData = useSetUserData();
  const { pageUser, handleFollowToggle } = useUserData();

  // Extract user object from user data context
  const user = pageUser?.results?.[0] || null;

  // Check if current user is viewing their own profile
  const is_author = currentUser?.username === user?.username;

  useEffect(() => {
    if (!id) return;

    // Reset posts and loading state when id changes
    setUserPosts({ results: [] });
    setHasLoaded(false);

    // Fetch user profile and posts in parallel
    const fetchData = async () => {
      try {
        const [{ data: pageUserData }, { data: userPostsData }] = await Promise.all([
          axios.get(`users/${id}/`),
          axios.get(`/posts/?author=${id}`),
        ]);
        // Update user data context with fetched user info
        setUserData((prev) => ({
          ...prev,
          pageUser: { results: [pageUserData] },
        }));
        // Set posts and mark loaded
        setUserPosts(userPostsData);
        setHasLoaded(true);
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };

    fetchData();
  }, [id, setUserData, currentUser]);

  // Handles toggling follow/unfollow
  const onFollowToggle = async () => {
    if (!user) return;
    await handleFollowToggle(user.id);
  };

  // Main user profile header + info
  const mainProfile = (
    <>
      {/* Show dropdown if user owns this profile */}
      {user?.is_owner && <UserEditDropdown id={user?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfilePicture}
            roundedCircle
            src={
                            user?.profile_picture
                              ? `${user.profile_picture}?${Date.now()}` // Cache bust for updated pic
                              : 'https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg'
                        }
            onError={(e) => {
              e.target.src = 'https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg';
            }}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{user?.username || 'User'}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{user?.followers}</div>
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
          {/* Show follow/unfollow button if viewing others' profiles */}
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
        {user?.bio && <Col className="p-3 bio">{user.bio}</Col>}
      </Row>
    </>
  );

  // User's posts with infinite scroll
  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">
        {user?.username}
        's posts
      </p>
      <hr />
      {userPosts.results.length ? (
        <InfiniteScroll
          dataLength={userPosts.results.length}
          next={() => fetchMoreData(userPosts, setUserPosts)}
          hasMore={!!userPosts.next}
          loader={<Asset spinner />}
        >
          {userPosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setUserPosts} />
          ))}
        </InfiniteScroll>
      ) : (
        <div className="text-center p-3">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="3x" />
          <p>
            No results found,
            {user?.username}
            {' '}
            hasn't posted yet.
          </p>
        </div>
      )}
    </>
  );

  return (
    <Row>
      {/* Main content column with profile info and posts */}
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

      {/* Sidebar with popular users (desktop only) */}
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularUsers />
      </Col>
    </Row>
  );
}

export default UserPage;
