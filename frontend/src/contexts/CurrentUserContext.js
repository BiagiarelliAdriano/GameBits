import {
  createContext, useContext, useEffect, useState, useCallback,
} from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../api/axiosDefaults';

// Contexts to hold current user data and setter function
export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

// Custom hooks for consuming the contexts easily
export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export function CurrentUserProvider({ children }) {
  // State to store current user object or null (unauthenticated)
  const [currentUser, setCurrentUser] = useState(undefined);
  const history = useHistory();

  // Helper functions to get tokens from localStorage
  const getAccessToken = () => localStorage.getItem('access_token');
  const getRefreshToken = () => localStorage.getItem('refresh_token');

  // Function to run on mount - tries to fetch the current user info using access token,
  // refreshes token if expired, or redirects to signin on failure
  const handleMount = useCallback(async () => {
    try {
      const token = getAccessToken();

      if (token) {
        try {
          // Attempt to get current user info with the access token
          const { data } = await axios.get('users/current/', {
            headers: { Authorization: `Bearer ${token}` },
          });
          // Save user ID for quick access if needed
          localStorage.setItem('user_id', data.id);
          setCurrentUser(data);
        } catch (err) {
          // If access token is expired or unauthorized, try refreshing
          if (err.response?.status === 401) {
            const refreshToken = getRefreshToken();

            if (refreshToken) {
              // Refresh the access token
              const response = await axios.post('token/refresh/', { refresh: refreshToken });
              const newAccessToken = response.data.access;
              localStorage.setItem('access_token', newAccessToken);

              // Retry fetching current user info with new access token
              const { data } = await axios.get('users/current/', {
                headers: { Authorization: `Bearer ${newAccessToken}` },
              });
              setCurrentUser(data);
            } else {
              // No refresh token available - throw to catch block below
              throw err;
            }
          } else {
            // Other error (not 401) - rethrow to catch block below
            throw err;
          }
        }
      } else {
        // No access token, so user is unauthenticated
        setCurrentUser(null);
      }
    } catch (err) {
      // On any failure, clear tokens, reset user and redirect to sign in page
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      setCurrentUser(null);
      history.push('/signin');
    }
  }, [history]);

  // Run handleMount once on mount or when handleMount changes (which is rare here)
  useEffect(() => {
    handleMount();
  }, [handleMount]);

  // Provide currentUser and setCurrentUser via context to the component tree
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}
