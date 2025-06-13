import React, { useEffect, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import { useParams, Redirect, useLocation } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import appStyles from '../../App.module.css';
import Post from './Post';

import CommentCreateForm from '../comments/CommentCreateForm';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Comment from '../comments/Comment';
import PopularUsers from '../users/PopularUsers';

import Asset from '../../components/Asset';
import axios from '../../api/axiosDefaults';
import { fetchMoreData } from '../../utils/utils';
import { useAlert } from '../../contexts/AlertContext';

function PostPage() {
  // Get post ID from URL params
  const { id } = useParams();
  // State for post and comments
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState({ results: [], next: null });
  const [error, setError] = useState(null);

  const location = useLocation();
  const alertMessage = location.state?.alertMessage;
  const { showAlert } = useAlert();

  // Get current user from context
  const currentUser = useCurrentUser();
  // Fallback profile picture in case none exists
  const profile_picture = currentUser?.profile_picture
    || 'https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg';

  // Show alert on mount if it exists
  useEffect(() => {
    if (alertMessage) {
      showAlert({ message: alertMessage, variant: 'success' });
    }
  }, [alertMessage, showAlert]);

  // Fetch post and comments on component mount or when ID changes
  useEffect(() => {
    let isMounted = true;
    const handleMount = async () => {
      try {
        // Fetch post data and its comments in parallel
        const [{ data: postData }, { data: commentsData }] = await Promise.all([
          axios.get(`/posts/${id}`),
          axios.get(`/comments/?post=${id}`),
        ]);
        if (isMounted) {
          setPost(postData);
          setComments(commentsData);
        }
      } catch (err) {
        console.log(err);
        if (isMounted) setError('An error occured while loading the post.');
      }
    };

    handleMount();
    return () => { isMounted = false; };
  }, [id]);

  // Redirect unauthenticated users to signup page
  if (!currentUser) {
    return <Redirect to="/signup" />;
  }

  if (error) {
    return (
      <Container className={appStyles.Content}>
        <h4>{error}</h4>
      </Container>
    );
  }

  return (
    <Row className="h-100">
      {/* Left side: Post content and comments */}
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {/* Display post or loading spinner */}
        {post ? (
          <Post {...post} setPost={setPost} postPage />
        ) : (
          <Asset spinner />
        )}

        {/* Comment section */}
        <Container className={appStyles.Content}>
          {/* Show comment form if user is logged in */}
          {currentUser ? (
            <CommentCreateForm
              user_id={currentUser.user_id}
              profilePicture={profile_picture}
              post={id}
              setPost={setPost}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            'Comments'
          ) : null}

          {/* Show existing comments with infinite scroll */}
          {comments.results.length ? (
            <InfiniteScroll
              dataLength={comments.results.length}
              next={() => fetchMoreData(comments, setComments)}
              hasMore={!!comments.next}
              loader={<Asset spinner />}
            >
              {comments.results.map((comment) => (
                <Comment
                  key={comment.id}
                  {...comment}
                  setPost={setPost}
                  setComments={setComments}
                  postId={post.id}
                />
              ))}
            </InfiniteScroll>
          ) : currentUser ? (
            <span>No comments yet, be the first to comment!</span>
          ) : (
            <span>No comments... yet</span>
          )}
        </Container>
      </Col>

      {/* Right side: Popular users list */}
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularUsers />
      </Col>
    </Row>
  );
}

export default PostPage;
