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
  // Current logged-in user and setter to update the context after profile edit
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  // Extract user id param from the URL (e.g., /users/:id/edit)
  const { id } = useParams();

  // Show alert
  const { showAlert } = useAlert();

  // History hook for navigation
  const history = useHistory();

  // Ref to the file input element to access the uploaded file
  const imageFile = useRef();

  // Local state for the form inputs (bio text and profile picture preview)
  const [userData, setUserData] = useState({
    bio: '',
    profile_picture: '',
  });
  const { bio, profile_picture } = userData;

  // Local state to hold validation or server errors returned by backend
  const [errors, setErrors] = useState({});

  // Submitting state to disable inputs while request is in flight
  const [submitting, setSubmitting] = useState(false);

  // Clean up created object URL for image preview to avoid memory leaks
  useEffect(() => () => {
    if (profile_picture && profile_picture.startsWith('blob:')) {
      URL.revokeObjectURL(profile_picture);
    }
  }, [profile_picture]);

  // Load the user data on mount if the current user matches the id param
  useEffect(() => {
    const handleMount = async () => {
      // Only allow editing if logged-in user is editing their own profile
      if (currentUser?.id?.toString() === id) {
        try {
          // Fetch user data from backend API
          const { data } = await axios.get(`/users/${id}/`);
          const { bio, profile_picture } = data;

          // Set form state with fetched data
          setUserData({
            bio,
            profile_picture: profile_picture || '',
          });
        } catch (err) {
          // If error, log and redirect to homepage
          console.log(err);
          history.push('/');
        }
      } else {
        // Redirect if trying to edit another user's profile
        history.push('/');
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  // Generic handler to update form input fields (only bio here)
  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  // Submit handler for saving changes
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true); // Disable form inputs

    // Create multipart/form-data payload to allow image upload
    const formData = new FormData();
    formData.append('bio', bio);

    // Append image file only if user selected a new one
    if (imageFile.current?.files[0]) {
      formData.append('profile_picture', imageFile.current.files[0]);
    }

    try {
      // Send PATCH request to update user profile
      const { data } = await axios.patch(`/users/${id}/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Update local form state with saved data (could include new profile_picture URL)
      setUserData({
        bio: data.bio,
        profile_picture: data.profile_picture,
      });

      // Update current user context with new profile picture URL
      setCurrentUser((prevUser) => ({
        ...prevUser,
        profile_picture: data.profile_picture,
      }));

      showAlert({ message: 'User successfully edited!', variant: 'success' });

      // After short delay, navigate back to previous page
      setTimeout(() => {
        history.goBack();
      }, 100);
    } catch (err) {
      // Show errors if the server returns validation errors
      console.error('Error:', err.response?.data);
      setErrors(err.response?.data || {});
    } finally {
      setSubmitting(false); // Re-enable form inputs
    }
  };

  // Form fields for text inputs and buttons
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
        {/* Show any bio errors from server */}
        {errors?.bio?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      {/* Cancel button to go back */}
      <Button
        type="button"
        className={`${btnStyles.Button} ${btnStyles.Blue} mr-2`}
        onClick={() => history.goBack()}
        disabled={submitting}
      >
        cancel
      </Button>

      {/* Submit button */}
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
        {/* Left column for image upload and preview */}
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

              {/* Show image upload errors */}
              {errors?.profile_picture?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <div>
                {/* Label styled as button to trigger file input */}
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Blue} btn my-auto`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>

              {/* Hidden file input for image upload */}
              <Form.Control
                id="image-upload"
                ref={imageFile}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  // Show preview of new selected image
                  if (e.target.files.length) {
                    setUserData({
                      ...userData,
                      profile_picture: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
                disabled={submitting}
              />
            </Form.Group>

            {/* On small screens show text fields below image */}
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>

        {/* Right column for bio and buttons (hidden on small screens) */}
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default UserEditForm;
