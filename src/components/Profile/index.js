import React, { useEffect } from 'react';

import './index.scss';

import Page404 from '../Page404';

// comp
const Profile = ({ handleGetUserInfos, error404 }) => {
  useEffect(() => {
    handleGetUserInfos();
  }, []);

  if (error404) return <Page404 />;

  return <h1>coucou</h1>;
};

export default Profile;
