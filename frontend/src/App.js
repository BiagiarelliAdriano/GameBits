import React from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch, Redirect } from "react-router-dom";
import "./api/axiosDefaults";

import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import PostEditForm from "./pages/posts/PostEditForm";
import UserPage from "./pages/users/UserPage";
import UsernameForm from "./pages/users/UsernameForm";
import UserPasswordForm from "./pages/users/UserPasswordForm";
import UserEditForm from "./pages/users/UserEditForm";

// Import context providers and current user hook
import { CurrentUserProvider, useCurrentUser } from "./contexts/CurrentUserContext";
import { UserDataProvider } from "./contexts/UserDataContext";

/**
 * Protects a route so only authenticated users can access it.
 * Otherwise, redirects to /signin.
 */
function ProtectedRoute({ component: Component, ...rest }) {
  const currentUser = useCurrentUser();
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

/**
 * Redirects authenticated users away from certain routes (e.g. signin/signup)
 * back to homepage.
 */
function RedirectIfAuthenticated({ component: Component, ...rest }) {
  const currentUser = useCurrentUser();
  return (
    <Route
      {...rest}
      render={(props) =>
        !currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

/**
 * Simple 404 Not Found page component
 */
function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you requested does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <CurrentUserProvider>
      <UserDataProvider>
        <div className={styles.App}>
          {/* Navigation Bar present on all pages */}
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              {/* Public posts listing routes */}
              <Route
                exact
                path="/"
                render={() => (
                  <PostsPage message="No results found. Adjust the search keyword." />
                )}
              />
              <Route
                exact
                path="/feed"
                render={() => (
                  <PostsPage
                    message="No results found. Adjust the search keyword or follow a user."
                    filter="followed"
                  />
                )}
              />
              <Route
                exact
                path="/liked"
                render={() => (
                  <PostsPage
                    message="No results found. Adjust the search keyword or like a post."
                    filter="liked"
                  />
                )}
              />

              {/* Redirect signed-in users away from signin/signup */}
              <RedirectIfAuthenticated exact path="/signin" component={SignInForm} />
              <RedirectIfAuthenticated exact path="/signup" component={SignUpForm} />

              {/* Protected routes - only for logged in users */}
              <ProtectedRoute exact path="/posts/create" component={PostCreateForm} />
              <ProtectedRoute exact path="/posts/:id/edit" component={PostEditForm} />
              <ProtectedRoute exact path="/users/:id/edit/username" component={UsernameForm} />
              <ProtectedRoute exact path="/users/:id/edit/password" component={UserPasswordForm} />
              <ProtectedRoute exact path="/users/:id/edit" component={UserEditForm} />

              {/* Public routes */}
              <Route exact path="/posts/:id" component={PostPage} />
              <Route exact path="/users/:id" component={UserPage} />

              {/* 404 fallback */}
              <Route component={NotFound} />
            </Switch>
          </Container>
        </div>
      </UserDataProvider>
    </CurrentUserProvider>
  );
}

export default App;
