import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axiosDefaults";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const UserDataContext = createContext();
const SetUserDataContext = createContext();

export const useUserData = () => useContext(UserDataContext);
export const useSetUserData = () => useContext(SetUserDataContext);

export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        pageUser: { results: [] },
        popularUsers: { results: [] },
    });

    const currentUser = useCurrentUser();

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
            console.log("Follow toggle API response:", data);

            // Assuming API returns updated user data after toggle
            setUserData(prev => {
                const updatedPageUser = { ...prev.pageUser };

                if (updatedPageUser.results.length) {
                    // Replace user data with updated info from API
                    updatedPageUser.results[0] = {
                        ...updatedPageUser.results[0],
                        following_id: data.following_id, // example, if API returns this
                        followers: data.followers_count, // example
                    };
                }

                return {
                    ...prev,
                    pageUser: updatedPageUser,
                };
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
