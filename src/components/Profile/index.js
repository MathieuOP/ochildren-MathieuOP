import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import './index.scss';

import Page404 from '../Page404';

// comp
const Profile = ({ handleGetUserInfos, loggedIn, userInfos }) => {
  useEffect(() => {
    handleGetUserInfos();
  }, []);

  if (!loggedIn) return <Page404 />;

  return (
    // <div className="profile">
    //   <img
    //     src="https://avatars0.githubusercontent.com/u/35486736?s=460&v=4"
    //     className="profile--image"
    //     alt="Avatar"
    //   />
    //   <ul className="profile--list">
    //     <li className="profile--list--elem">Anatole Lucet</li>
    //     <li className="profile--list--elem">Crayzzit</li>
    //     <li className="profile--list--elem">lucet.anatole@gmail.com</li>
    //     <li className="profile--list--elem">
    //       <Button>Modifier mon mot de passe</Button>
    //     </li>
    //   </ul>
    // </div>
    <div className="profile">
      <img src={userInfos.image} className="profile--image" alt="Avatar" />
      <ul className="profile--list">
        <li className="profile--list--elem">{userInfos.firstname}</li>
        <li className="profile--list--elem">{userInfos.username}</li>
        <li className="profile--list--elem">{userInfos.email}</li>
        <li className="profile--list--elem">
          <Button>Modifier mon mot de passe</Button>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  handleGetUserInfos: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  userInfos: PropTypes.object.isRequired
};

export default Profile;
