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

import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import axios from "../../api/axiosDefaults";
import { fetchMoreData } from "../../utils/utils";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_picture = currentUser?.profile_picture;
  const [comments, setComments] = useState({ results: [], next: null });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: postData}, { data: commentsData }] = await Promise.all([
          axios.get(`/posts/${id}`),
          axios.get(`/comments/?post=${id}`),
        ]);

        setPost({ results: [postData] });
        setComments(commentsData);
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
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default PostPage;
