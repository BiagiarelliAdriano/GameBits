import React, { useEffect, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import { useLocation } from 'react-router';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from './Post';
import Asset from '../../components/Asset';

import appStyles from '../../App.module.css';
import styles from '../../styles/PostsPage.module.css';
import axios from '../../api/axiosDefaults';
import { fetchMoreData } from '../../utils/utils';
import PopularUsers from '../users/PopularUsers';

function PostsPage({ message, filter = '' }) {
  // Posts state
  const [posts, setPosts] = useState({ results: [] });

  // Track loading state
  const [hasLoaded, setHasLoaded] = useState(false);

  // Track pathname for refetching on route change
  const { pathname } = useLocation();

  // Search query state
  const [query, setQuery] = useState('');

  // Fetch posts with search & filter whenever query, pathname, or filter changes
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/posts/', {
          params: { search: query, filter },
        });

        if (response.data && Array.isArray(response.data.results)) {
          setPosts(response.data);
        } else {
          console.error('Invalid response data format:', response.data);
        }

        setHasLoaded(true);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setHasLoaded(true); // prevent permanent spinner if error happens
      }
    };

    setHasLoaded(false);

    // Debounce API call by 1s when user types
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <Row className="h-100">
      {/* Left Column - Posts + Search */}
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularUsers mobile />

        <i className={`fas fa-search ${styles.SearchIcon}`} />

        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts..."
          />
        </Form>

        {/* Handle loaded vs loading state */}
        {hasLoaded ? (
          <>
            {posts?.results?.length ? (
              <InfiniteScroll
                children={posts.results.map((post) => (
                  <Post key={post.id} {...post} setPosts={setPosts} />
                ))}
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset message={message || 'No posts found.'} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>

      {/* Right Column - Desktop Popular Users */}
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularUsers />
      </Col>
    </Row>
  );
}

export default PostsPage;
