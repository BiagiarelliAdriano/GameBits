import { createContext, useContext, useEffect, useState, useCallback } from "react";
import axios from '../api/axiosDefaults';
import { useHistory } from 'react-router-dom';

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(undefined);
    const history = useHistory();

    const getAccessToken = () => localStorage.getItem('access_token');
    const getRefreshToken = () => localStorage.getItem('refresh_token');

    const handleMount = useCallback(async () => {

        try {
            const token = getAccessToken();

            if (token) {
                try {
                    const { data } = await axios.get('users/current/', {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    localStorage.setItem('user_id', data.id);
                    setCurrentUser(data);
                } catch (err) {
                    if (err.response?.status === 401) {
                        const refreshToken = getRefreshToken();

                        if (refreshToken) {
                            const response = await axios.post('token/refresh/', { refresh: refreshToken });
                            const newAccessToken = response.data.access;
                            localStorage.setItem('access_token', newAccessToken);

                            const { data } = await axios.get('users/current/', {
                                headers: { Authorization: `Bearer ${newAccessToken}` }
                            });
                            setCurrentUser(data);
                        } else {
                            throw err;
                        }
                    } else {
                        throw err;
                    }
                }
            } else {
                setCurrentUser(null);
            }
        } catch (err) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            setCurrentUser(null);
            history.push('/signin');
        }
    }, [history]);

    useEffect(() => {
        handleMount();
    }, [handleMount]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <SetCurrentUserContext.Provider value={setCurrentUser}>
                {children}
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    );
};
