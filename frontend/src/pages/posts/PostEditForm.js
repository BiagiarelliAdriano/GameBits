import React, { useRef, useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import { useHistory, useParams } from 'react-router-dom';
import Asset from '../../components/Asset';

import styles from '../../styles/PostCreateEditForm.module.css';
import appStyles from '../../App.module.css';
import btnStyles from '../../styles/Button.module.css';
import axios from '../../api/axiosDefaults';

function PostEditForm() {
  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    title: '',
    game: '',
    content: '',
    image: '',
  });
  const { title, game, content, image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  const [imagePreview, setImagePreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axios.get(`/posts/${id}/`);
        const { title, game, content, image, is_author } = data;
        if (is_author) {
          setPostData({ title, game, content, image });
          setImagePreview(image);
        } else {
          history.push('/');
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      const file = event.target.files[0];

      // File type check
      if (!file.type.startsWith('image/')) {
        setErrors({ image: ['Please select a valid image file.'] });
        setPostData({ ...postData, image: '' });
        setImagePreview(null);
        return;
      }

      // File size check (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ image: ['Image file size must be less than 5MB.'] });
        setPostData({ ...postData, image: '' });
        setImagePreview(null);
        return;
      }

      setPostData({ ...postData, image: file });
      setImagePreview(URL.createObjectURL(file));
      setErrors((prevErrors) => ({ ...prevErrors, image: [] }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const formData = new FormData();
    const authorId = parseInt(localStorage.getItem('user_id'), 10);

    formData.append('title', title);
    formData.append('game', game);
    formData.append('content', content);
    formData.append('author', authorId);

    if (imageInput?.current?.files[0]) {
      formData.append('image', imageInput.current.files[0]);
    }

    try {
      await axios.put(`/posts/${id}/`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      history.push(`/posts/${id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Type the title of your post..."
          value={title}
          onChange={handleChange}
          maxLength={50}
          disabled={submitting}
        />
        <div className="text-right small text-muted">{title.length}/50</div>
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Game</Form.Label>
        <Form.Control
          type="text"
          name="game"
          placeholder="Type the name of the game..."
          value={game}
          onChange={handleChange}
          maxLength={50}
          disabled={submitting}
        />
        <div className="text-right small text-muted">{game.length}/50</div>
      </Form.Group>
      {errors?.game?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          placeholder="Share the story behind your post..."
          value={content}
          onChange={handleChange}
          maxLength={255}
          disabled={submitting}
        />
        <div className="text-right small text-muted">{content.length}/255</div>
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} mr-2`}
        onClick={() => history.goBack()}
        disabled={submitting}
      >
        cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        type="submit"
        disabled={submitting}
      >
        {submitting ? 'Saving...' : 'save'}
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt=""
                  className="img-fluid mb-3"
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
              ) : (
                <Asset
                  message="Click or tap to upload an image"
                  spinner={false}
                  src={null}
                />
              )}

              <Form.Label
                className={`${btnStyles.uploadButton} ${btnStyles.Blue} btn mt-3`}
                htmlFor="image-upload"
              >
                {image ? 'Change the image' : (
                  <div className="d-flex flex-column align-items-center">
                    <i className="fa-solid fa-upload fa-3x mb-2" />
                    Upload an image
                  </div>
                )}
              </Form.Label>

              <Form.Control
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
                className="d-none"
                disabled={submitting}
              />
            </Form.Group>

            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>

        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostEditForm;
