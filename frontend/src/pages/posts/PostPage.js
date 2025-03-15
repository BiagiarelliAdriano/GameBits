import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import Post from "./Post";
import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Comment from "../comments/Comment";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_picture = currentUser?.profile_picture;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        // Get the token from localStorage (assuming it's stored there)
        const token = localStorage.getItem('access_token');

        // Check if the token exists
        if (!token) {
          throw new Error("No access token found");
        }

        // Fetch data with the Authorization header
        const response = await fetch(`/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Check if the response is ok (status 200-299)
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }

        const postData = await response.json();

        setPost({ results: [postData] });
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        {post.results.length > 0 && (
          <Post {...post.results[0]} setPost={setPost} postPage />
        )}
        <Container className={appStyles.Content}>
          {currentUser ? (
            <CommentCreateForm
              user_id={currentUser.user_id}
              profilePicture={profile_picture}
              post={id}
              setPost={setPost}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {comments.results.length ? (
            comments.results.map((comment) => (
              <Comment
                key={comment.id}
                {...comment}
                setPost={setPost}
                setComments={setComments}
              />
            ))
          ) : currentUser ? (
            <span>No comments yet, be the first to comment!</span>
          ) : (
            <span>No comments... yet</span>
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default PostPage;
