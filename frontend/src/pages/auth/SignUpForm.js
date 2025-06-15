import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Updated import

import {
  Form, Button, Image, Col, Row, Container, Alert,
} from 'react-bootstrap';
import styles from '../../styles/SignInUpForm.module.css';
import btnStyles from '../../styles/Button.module.css';
import appStyles from '../../App.module.css';

import axios from '../../api/axiosDefaults';
import { useAlert } from '../../contexts/AlertContext';

import signUpImage from '../../assets/signup.jpg';

// SignUpForm handles user registration with form validation and error display.
// On a successful signup, redirects to the sign-in page.

function SignUpForm() {
  // Form state for input fields.
  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
  });
  const {
    username, email, password1, password2,
  } = signUpData;

  // Stores validation or submission errors from backend
  const [errors, setErrors] = useState({});
  // Tracks whether form submission is in progress to disable button
  const [isSubmitting, setIsSubmitting] = useState(false);

  const history = useHistory();

  // Access showAlert from global alert context
  const { showAlert } = useAlert();

  // Update form state and clear errors for the changed field
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
    // Clear errors for this field and non_field_errors on change
    setErrors((prevErrors) => ({
      ...prevErrors,
      [event.target.name]: null,
      non_field_errors: null,
    }));
  };

  // Submit registration data to backend API
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post('users/register/', signUpData);
      // Show the welcome alert right before redirect
      showAlert({ message: 'Welcome to GameBits! Now, sign in!', variant: 'success' });
      // Redirect to sign-in page on success
      history.push('/signin');
    } catch (err) {
      // Show backend validation errors if any
      setErrors(err.response?.data || {});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // JSX rendering form fields, error alerts, and sign-up image
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Sign Up</h1>

          <Form onSubmit={handleSubmit}>
            {/* Username */}
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
                maxLength={24}
              />
              <div className="text-right small text-muted">
                {username.length}/24
              </div>
            </Form.Group>
            {errors.username?.map((message, idx) => <Alert variant="warning" key={idx}>{message}</Alert>)}

            {/* Email */}
            <Form.Group controlId="email">
              <Form.Label className="d-none">Email</Form.Label>
              <Form.Control
                className={styles.Input}
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
                maxLength={50}
              />
              <div className="text-right small text-muted">
                {email.length}/50
              </div>
            </Form.Group>
            {errors.email?.map((message, idx) => <Alert variant="warning" key={idx}>{message}</Alert>)}

            {/* Password */}
            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
                maxLength={24}
              />
              <div className="text-right small text-muted">
                {password1.length}/24
              </div>
            </Form.Group>
            {errors.password1?.map((message, idx) => <Alert variant="warning" key={idx}>{message}</Alert>)}

            {/* Confirm Password */}
            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={handleChange}
                maxLength={24}
              />
              <div className="text-right small text-muted">
                {password2.length}/24
              </div>
            </Form.Group>
            {errors.password2?.map((message, idx) => <Alert variant="warning" key={idx}>{message}</Alert>)}

            {/* Submit Button */}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing Up...' : 'Sign up'}
            </Button>

            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account?
            {' '}
            <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={signUpImage}
          alt="Sign Up Illustration"
        />
      </Col>
    </Row>
  );
}

export default SignUpForm;
