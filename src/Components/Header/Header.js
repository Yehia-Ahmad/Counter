import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticationActions } from "../../Store/auth"
import classes from './Header.module.css';

const Header = () => {

  const dispatch = useDispatch();
  const isAuthentication = useSelector(state => state.Authentication.isAuthentication)

  const logoutHandler = () => {
    dispatch(authenticationActions.Logout())
  }
  const reloadHandler = () => {
    window.location.reload();
  }
  return (
    <header className={classes.header}>
      <h1 onClick={reloadHandler}>Redux Auth</h1>
      {isAuthentication && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}

    </header>
  );
};

export default Header;
