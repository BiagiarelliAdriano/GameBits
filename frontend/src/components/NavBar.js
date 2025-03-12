import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from "react-router-dom";
import {
    useCurrentUser,
    useSetCurrentUser,
} from '../contexts/CurrentUserContext';
import Avatar from "./Avatar";
import useClickOutiseToggle from '../hooks/useClickOutiseToggle';

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const {expanded, setExpanded, ref} = useClickOutiseToggle();

    const handleSignOut = async () => {
        // Remove tokens from localStorage for Sign Out
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setCurrentUser(null);
    };

    const addPostIcon = (
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/posts/create"
        >
            <i className="fa-solid fa-circle-plus"></i>New Post
        </NavLink>
    )
    const loggedInIcons = (
        <>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/follow"
            >
                <i className="fa-solid fa-walkie-talkie"></i>Feed
            </NavLink>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/likes"
            >
                <i className="fa-solid fa-heart"></i>Liked
            </NavLink>
            <NavLink
                className={styles.NavLink}
                to="/"
                onClick={handleSignOut}
            >
                <i className="fa-solid fa-door-open"></i>Sign out
            </NavLink>
            <NavLink
                className={styles.NavLink}
                to={`/users/${currentUser?.user_id}`}
            >
                <Avatar src={currentUser?.profile_picture} text="Profile" height="40" />
            </NavLink>
        </>
    )
    const loggedOutIcons =
        <>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signin"
            >
                <i className="fas fa-sign-in-alt"></i>Sign In
            </NavLink>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signup"
            >
                <i className="fas fa-user-plus"></i>Sign Up
            </NavLink>
        </>

    return (
        <Navbar
            expanded={expanded}
            className={styles.NavBar}
            expand="md"
            fixed="top"
        >
            <Container className="d-flex justify-content-between align-items-center">
                <NavLink to="/">
                    <Navbar.Brand className="mx-auto">
                        <img src={logo} alt="logo" height="45" />
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
                            <i className="fa-solid fa-house-user"></i>Home
                        </NavLink>
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;