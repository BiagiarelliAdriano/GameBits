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

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axios.get("/users/?ordering=-level");
                console.log("API Response Data:", data);  // Log to see the structure

                // Ensure data is always in the format { results: [...] }
                setUserData((prevState) => ({
                    ...prevState,
                    popularUsers: { results: Array.isArray(data) ? data : [] },
                }));
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [currentUser]);

    return (
        <UserDataContext.Provider value={userData}>
            <SetUserDataContext.Provider value={setUserData}>
                {children}
            </SetUserDataContext.Provider>
        </UserDataContext.Provider>
    );
};
