import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useUserData } from "../../contexts/UserDataContext";
import User from "./User";

const PopularUsers = ({ mobile }) => {
  const { popularUsers, handleFollowToggle } = useUserData();

  const hasUsers = Array.isArray(popularUsers.results) && popularUsers.results.length > 0;

  return (
    <Container
      className={`${appStyles.Content} ${mobile && "d-lg-none text-center mb-3"}`}
    >
      {hasUsers ? (
        <>
          <p>Highest Level Users</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularUsers.results.slice(0, 4).map((user) => (
                <User
                  key={user.id}
                  user={user}
                  mobile
                  handleFollowToggle={handleFollowToggle}
                />
              ))}
            </div>
          ) : (
            popularUsers.results.map((user) => (
              <User
                key={user.id}
                user={user}
                handleFollowToggle={handleFollowToggle}
              />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularUsers;
