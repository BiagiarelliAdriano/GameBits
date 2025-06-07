import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axiosDefaults";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";

const UserDataContext = createContext();
const SetUserDataContext = createContext();

export const useUserData = () => useContext(UserDataContext);
export const useSetUserData = () => useContext(SetUserDataContext);

export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        popularUsers: { results: [] },
        pageUser: { results: [] },
    });

    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    // Fetch popular users whenever currentUser changes (login/logout)
    useEffect(() => {
        const fetchPopularUsers = async () => {
            try {
                const { data } = await axios.get("/users/?ordering=-level");
                setUserData((prevState) => ({
                    ...prevState,
                    popularUsers: data,
                }));
            } catch (err) {
                console.log(err)
            }
        };

        fetchPopularUsers();
    }, [currentUser]);

    // Toggle follow/unfollow for a user by ID
    const handleFollowToggle = async (userId) => {
        try {
            const { data } = await axios.post(`follow/toggle/${userId}/`);

            setUserData((prev) => {
                const updatedPopularUsers = prev.popularUsers.results.map((user) =>
                    user.id === userId
                        ? {
                            ...user,
                            following_id: data.following_id,
                            followers: data.followers_count,
                        }
                        : user
                );

                const updatedPageUser = prev.pageUser.results.map((user) =>
                    user.id === userId
                        ? {
                            ...user,
                            following_id: data.following_id,
                            followers: data.followers_count,
                        }
                        : user
                );

                return {
                    ...prev,
                    popularUsers: {
                        ...prev.popularUsers,
                        results: updatedPopularUsers,
                    },
                    pageUser: {
                        ...prev.pageUser,
                        results: updatedPageUser,
                    },
                };
            });

            setCurrentUser(prev => prev && {
                ...prev,
                following: data.following_id
                    ? prev.following + 1 // Just followed someone
                    : prev.following - 1 // Just unfollowed someone
            });

            return data.message;
        } catch (err) {
            console.error("Error toggling follow:", err);
        }
    };

    return (
        <UserDataContext.Provider
            value={{
                pageUser: userData.pageUser,
                popularUsers: userData.popularUsers,
                handleFollowToggle,
            }}
        >
            <SetUserDataContext.Provider value={setUserData}>
                {children}
            </SetUserDataContext.Provider>
        </UserDataContext.Provider>
    );
};
