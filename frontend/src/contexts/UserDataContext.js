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

            setUserData((prevState) => {
                // Update pageUser if it matches the toggled user
                const updatedPageUser = { ...prevState.pageUser };

                if (updatedPageUser?.results?.length) {
                    const user = updatedPageUser.results[0];
                    if (user.id === userId) {
                        updatedPageUser.results[0] = {
                            ...user,
                            following_id: user.following_id ? null : true,
                            followers: user.followers + (user.following_id ? -1 : 1),
                        };
                    }
                }

                return {
                    ...prevState,
                    pageUser: updatedPageUser,
                };
            });

            return data.message;
        } catch (err) {
            // Optionally handle errors here
            console.log(err);
            return null;
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
