import React from 'react';
import classes from './Auth.module.css';
import { authenticationActions } from "../../Store/Store"
import { useDispatch, useSelector } from 'react-redux';

const Auth = () => {

  const dispatch = useDispatch();
  const isAuthentication = useSelector(state => state.Authentication.isAuthentication)

  // const authenticationHandler = () => {
  // }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(authenticationActions);
    dispatch(authenticationActions.Login())
  }

  const authComponent = (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button >Login</button>
        </form>
      </section>
    </main>
  )
  return (
    !isAuthentication && authComponent
  );
};

export default Auth;
