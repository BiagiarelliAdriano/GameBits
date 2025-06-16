import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import axios from '../../api/axiosDefaults';
import {
  useCurrentUser,
  useSetCurrentUser,
} from '../../contexts/CurrentUserContext';
import { useAlert } from '../../contexts/AlertContext';

import btnStyles from '../../styles/Button.module.css';
import appStyles from '../../App.module.css';

function UserEditForm() {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const { showAlert } = useAlert();
  const history = useHistory();
  const imageFile = useRef();

  const [userData, setUserData] = useState({
    bio: '',
    profile_picture: '',
  });
  const { bio, profile_picture } = userData;
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB limit

  // Clean up object URLs
  useEffect(() => () => {
    if (profile_picture && profile_picture.startsWith('blob:')) {
      URL.revokeObjectURL(profile_picture);
    }
  }, [profile_picture]);

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.id?.toString() === id) {
        try {
          const { data } = await axios.get(`/users/${id}/`);
          const { bio, profile_picture } = data;
          setUserData({
            bio,
            profile_picture: profile_picture || '',
          });
        } catch (err) {
          console.log(err);
          history.push('/');
        }
      } else {
        history.push('/');
      }
    };
    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle image file selection and validation
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      const file = event.target.files[0];

      if (!file.type.startsWith('image/')) {
        setErrors({ profile_picture: ['Only image files are allowed.'] });
        setUserData({ ...userData, profile_picture: '' });
        imageFile.current.value = null;
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        setErrors({ profile_picture: ['Image is too large. Max size is 5MB.'] });
        setUserData({ ...userData, profile_picture: '' });
        imageFile.current.value = null;
        return;
      }

      setErrors((prev) => ({ ...prev, profile_picture: null }));

      if (profile_picture && profile_picture.startsWith('blob:')) {
        URL.revokeObjectURL(profile_picture);
      }

      const newPreviewUrl = URL.createObjectURL(file);
      setUserData({ ...userData, profile_picture: newPreviewUrl });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const formData = new FormData();
    formData.append('bio', bio);

    if (imageFile.current?.files[0]) {
      formData.append('profile_picture', imageFile.current.files[0]);
    }

    try {
      const { data } = await axios.patch(`/users/${id}/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setUserData({
        bio: data.bio,
        profile_picture: data.profile_picture,
      });

      setCurrentUser((prevUser) => ({
        ...prevUser,
        profile_picture: data.profile_picture,
      }));

      showAlert({ message: 'User successfully edited!', variant: 'success' });

      setTimeout(() => {
        history.goBack();
      }, 100);
    } catch (err) {
      console.error('Error:', err.response?.data);
      setErrors(err.response?.data || {});
    } finally {
      setSubmitting(false);
    }
  };

  const textFields = (
    <>
      <Form.Group>
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as="textarea"
          value={bio}
          onChange={handleChange}
          name="bio"
          rows={7}
          disabled={submitting}
          maxLength={500}
        />
        <div className="text-right small text-muted">
          {bio.length}/500
        </div>
        {errors?.bio?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      <Button
        type="button"
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
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={appStyles.Content}>
            <Form.Group>
              <figure>
                <Image
                  src={
                    profile_picture || 'https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg'
                  }
                  fluid
                  alt={`${currentUser?.username || 'User'}'s profile`}
                />
              </figure>

              {errors?.profile_picture?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Blue} btn my-auto`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>

              <Form.Control
                id="image-upload"
                ref={imageFile}
                type="file"
                accept="image/*"
                onChange={handleChangeImage}
                disabled={submitting}
              />
            </Form.Group>

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>

        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default UserEditForm;
