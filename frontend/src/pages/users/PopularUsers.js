import React from 'react';
import { Container } from 'react-bootstrap';
import appStyles from '../../App.module.css';
import Asset from '../../components/Asset';
import { useUserData } from '../../contexts/UserDataContext';
import User from './User';

function PopularUsers({ mobile }) {
  const { popularUsers, handleFollowToggle } = useUserData();

  // Defensive null check on popularUsers
  const hasUsers = popularUsers?.results?.length > 0;

  return (
    <Container
      className={`${appStyles.Content} ${mobile ? 'd-lg-none text-center mb-3' : ''}`}
    >
      {hasUsers ? (
        <>
          <p>Popular Users</p>

          {mobile ? (
            // Render first 4 users for mobile
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
            // Render full list for desktop
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
        // Graceful fallback depending on whether data is empty or still loading
        <Asset message="No popular users yet." spinner={!popularUsers?.results} />
      )}
    </Container>
  );
}

export default PopularUsers;
