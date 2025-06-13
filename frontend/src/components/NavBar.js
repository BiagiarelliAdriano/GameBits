import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import { useAlert } from '../contexts/AlertContext';

// NavBar component handles site navigation with conditional links based on auth state
function NavBar() {
  // Get current user and setter from content
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const history = useHistory();
  const { showAlert } = useAlert();

  // Custom hook to toggle navbar menu open/close
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  // Sign out function clears tokens, resets user context, and redirects to sign in page
  const handleSignOut = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setCurrentUser(null);
    showAlert({ message: 'Successfully signed out.', variant: 'info' });
    history.push('/signin');
  };

  const addPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/posts/create"
    >
      <i className="fa-solid fa-circle-plus" />
      {' '}
      New Post
    </NavLink>
  );

  // Icons shown when user is logged in
  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/feed"
      >
        <i className="fa-solid fa-walkie-talkie" />
        {' '}
        Feed
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/liked"
      >
        <i className="fa-solid fa-heart" />
        {' '}
        Liked
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to="/"
        onClick={handleSignOut}
      >
        <i className="fa-solid fa-door-open" />
        {' '}
        Sign Out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/users/${currentUser?.id}`}
      >
        <Avatar
          src={currentUser?.profile_picture || 'https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg'}
          height="40"
          alt="Profile"
        />
      </NavLink>
    </>
  );

  // Icons shown when user is logged out
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt" />
        {' '}
        Sign In
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signup"
      >
        <i className="fas fa-user-plus" />
        {' '}
        Sign Up
      </NavLink>
    </>
  );

  // Render navbar with brand, toggle, and nav links
  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <Container className="d-flex justify-content-between align-items-center">
        <NavLink to="/" exact>
          <Navbar.Brand className="mx-auto">
            <img src={logo} alt="Gamebits logo" height="45" />
          </Navbar.Brand>
        </NavLink>

        {currentUser && addPostIcon}

        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fa-solid fa-house-user" />
              {' '}
              Home
            </NavLink>

            {!currentUser ? loggedOutIcons : loggedInIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
