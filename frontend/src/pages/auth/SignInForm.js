import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { Link, useHistory, useLocation } from 'react-router-dom';
import axios from '../../api/axiosDefaults';
import styles from '../../styles/SignInUpForm.module.css';
import btnStyles from '../../styles/Button.module.css';
import appStyles from '../../App.module.css';
import { useSetCurrentUser } from '../../contexts/CurrentUserContext';
import { useAlert } from '../../contexts/AlertContext';

import signInImage from '../../assets/signin.jpg';

function SignInForm() {
  const setCurrentUser = useSetCurrentUser();
  const [signInData, setSignInData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = signInData;
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();
  const location = useLocation();
  // Get global alert show function
  const { showAlert } = useAlert();

  // On mount, check if redirected with a message in location.state and show alert
  useEffect(() => {
    if (location.state?.alert) {
      showAlert(location.state.alert);
      // Clear the state so alert doesn't show again on back navigation
      history.replace({ ...location, state: {} });
    }
  }, [location, showAlert, history]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Disable button
    try {
      // Send username/password to get JWT tokens
      const res = await axios.post('token/', signInData);
      const { data } = res;

      // Save tokens in localStorage for authenticated requests
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);

      // Fetch current user profile using access token
      const { data: userData } = await axios.get('users/current/', {
        headers: {
          Authorization: `Bearer ${data.access}`,
        },
      });
      setCurrentUser(userData);
      // Show success alert after sign-in
      showAlert({ message: 'Successfully signed in!', variant: 'success' });
      // Redirect home
      history.push('/');
    } catch (err) {
      // Show error messages returned from backend
      setErrors(err.response?.data || {});
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
    // Optionally clear errors for this field on change
    setErrors((prevErrors) => ({
      ...prevErrors,
      [event.target.name]: null,
      non_field_errors: null,
    }));
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto p-0 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4`}>
          <h1 className={styles.Header}>Sign In</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                className={styles.Input}
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                className={styles.Input}
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signup">
            Don't have an account?
            {' '}
            <span>Sign up now!</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={signInImage}
          alt="Sign In Illustration"
        />
      </Col>
    </Row>
  );
}

export default SignInForm;
