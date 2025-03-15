import { createContext, useContext, useEffect, useState, useCallback } from "react";
import axios from '../api/axiosDefaults';
import { useHistory } from 'react-router-dom';

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const history = useHistory();
    const baseURL = axios.defaults.baseURL;

    const handleMount = useCallback(async () => {
        try {
            let token = localStorage.getItem('access_token');
            if (token) {
                try {
                    const { data } = await axios.get(`${baseURL}/api/users/current`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    localStorage.setItem('user_id', data.id);
                    setCurrentUser(data);
                } catch (err) {
                    if (err.response && err.response.status === 401) {
                        const refreshToken = localStorage.getItem('refresh_token');
                        if (refreshToken) {
                            const response = await axios.post(`${baseURL}/api/token/refresh/`, { refresh: refreshToken });
                            const newAccessToken = response.data.access;
                            localStorage.setItem('access_token', newAccessToken);
                            const { data } = await axios.get(`${baseURL}/api/users/current/`, {
                                headers: {
                                    Authorization: `Bearer ${newAccessToken}`,
                                },
                            });
                            setCurrentUser(data);
                        }
                    } else {
                        localStorage.removeItem('access_token');
                        localStorage.removeItem('refresh_token');
                        setCurrentUser(null);
                        history.push('/signin');
                    }
                }
            } else {
                console.log("No token found");
            }
        } catch (err) {
            console.log(err);
        }
    }, [baseURL, history]);

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
