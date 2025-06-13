import React, { useRef, useState, useContext } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import { useHistory } from 'react-router-dom';
import Asset from '../../components/Asset';
import { useAlert } from '../../contexts/AlertContext';

import styles from '../../styles/PostCreateEditForm.module.css';
import appStyles from '../../App.module.css';
import btnStyles from '../../styles/Button.module.css';
import axios from '../../api/axiosDefaults';

function PostCreateForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: '',
    game: '',
    content: '',
    image: '',
  });
  const {
    title, game, content, image,
  } = postData;
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB limit for images

  const { showAlert } = useAlert();
  const [imagePreview, setImagePreview] = useState(null); // State for image preview
  const [isSubmitting, setIsSubmitting] = useState(false);
  const imageInput = useRef(null);
  const history = useHistory();

  // Handle text input changes (title, game, content)
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle image selection
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      const file = event.target.files[0];

      if (!file.type.startsWith('image/')) {
        setErrors({ image: ['Only image files are allowed.'] });
        setPostData({ ...postData, image: null });
        setImagePreview(null);
        imageInput.current.value = null;
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        setErrors({ image: ['Image is too large. Max size is 5MB.'] });
        setPostData({ ...postData, image: null });
        setImagePreview(null);
        imageInput.current.value = null;
        return;
      }

      // Clear previous image errors
      setErrors((prev) => ({ ...prev, image: null }));

      if (imagePreview) {
        URL.revokeObjectURL(imagePreview); // Clean up previous preview URL
      }

      const newPreviewUrl = URL.createObjectURL(file);
      setImagePreview(newPreviewUrl);
      setPostData({ ...postData, image: file });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Clear previous errors
    setErrors({});

    // Client-side validation for required text fields
    if (!title.trim() || !game.trim() || !content.trim()) {
      showAlert({ message: 'Please fill out all the required fields: Title, Game, and Content.', variant: 'warning' });
      setIsSubmitting(false);
      return; // stop submit
    }

    setIsSubmitting(true);
    const formData = new FormData();

    formData.append('title', title);
    formData.append('game', game);
    formData.append('content', content);
    if (imageInput.current.files[0]) {
      formData.append('image', imageInput.current.files[0]);
    }

    try {
      const { data } = await axios.post('/posts/', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      history.push({
        pathname: `/posts/${data.id}`,
        state: { alertMessage: 'Post successfully created.' },
      });
    } catch (err) {
      setIsSubmitting(false);
      if (err.response?.status !== 401) {
        showAlert({ message: 'You must be logged in to create a post.', variant: 'danger' });
      } else {
        setErrors(err.response?.data);
        showAlert({ message: 'Failed to create post. Please check the form for errors.', variant: 'danger' });
      }
    }
  };

  // Render all text input fields
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
          disabled={isSubmitting}
        />
      </Form.Group>
      {errors?.title?.map((message) => (
        <Alert variant="warning" key={message}>
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
          disabled={isSubmitting}
        />
      </Form.Group>
      {errors?.game?.map((message) => (
        <Alert variant="warning" key={message}>
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
          disabled={isSubmitting}
        />
      </Form.Group>
      {errors?.content?.map((message) => (
        <Alert variant="warning" key={message}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
        disabled={isSubmitting}
      >
        cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Creating...' : 'Create'}
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
                // If image exists, show the preview using Asset
                <img
                  src={imagePreview}
                  alt=""
                  className="img-fluid mb-3"
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
              ) : (
                // If no image, show upload icon + message via Asset
                <Asset
                  message="Click or tap to upload an image"
                  spinner={false}
                  src={null}
                />
              )}

              {/* Upload Button (appears even if image is shown) */}
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

              {/* Hidden file input */}
              <Form.Control
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
                className="d-none"
                disabled={isSubmitting}
              />
            </Form.Group>
            {errors?.image?.map((message) => (
              <Alert variant="warning" key={message}>
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

export default PostCreateForm;
