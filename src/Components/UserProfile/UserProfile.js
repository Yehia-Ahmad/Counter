import React from 'react';
import { useSelector } from 'react-redux';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  const isAuthentication = useSelector(state => state.Authentication.isAuthentication)

  return (
    isAuthentication && (
      <main className={classes.profile}>
        <h2>My User Profile</h2>
      </main>
    )
  )

};

export default UserProfile;
