import styles from './App.module.css';
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleMount = async () => {
    try {
      let token = localStorage.getItem('access_token');
      if (token) {
        try {
          const { data } = await axios.get('http://127.0.0.1:8000/api/users/current/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setCurrentUser(data);
        } catch (err) {
          // If token is expired (401), refresh token
          if (err.response && err.response.status === 401) {
            const refreshToken = localStorage.getItem('refresh_token');
            if (refreshToken) {
              const response = await axios.post('http://127.0.0.1:8000/api/token/refresh/', { refresh: refreshToken });
              const newAccessToken = response.data.access;
              localStorage.setItem('access_token', newAccessToken);

              // Retry the request with the new token
              const { data } = await axios.get('http://127.0.0.1:8000/api/users/current/', {
                headers: {
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
              setCurrentUser(data);
            }
          } else {
            // If token is invalid or expired and there's no refresh token
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            setCurrentUser(null);  // Reset the current user
            window.location.href = '/signin'; // Redirect to login page
          }
        }
      } else {
        console.log("No token found");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount()
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <h1>Home Page</h1>} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;