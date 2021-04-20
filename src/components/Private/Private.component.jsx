import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserAccount } from '../../state/User';

function Private({ children, ...rest }) {
  const { state } = useUserAccount();
  const { authenticated } = state;

  return (
    <Route {...rest} render={() => (authenticated ? children : <Redirect to="/" />)} />
  );
}

export default Private;
