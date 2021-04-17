import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUserAccount, actions } from '../../state/User';
import './Logout.styles.css';

function LogoutPage() {
  const { state, dispatch } = useUserAccount();
  useEffect(() => {
    if (state.authenticated) {
      dispatch({
        type: actions.logout,
        payload: {
          authenticated: false,
          email: null,
          showMenu: false,
        },
      });
    }
  });

  return (
    <div data-testid="logout-page">
      <h3>
        Thank you for using Reactbootcamp 2021, return to the app click{' '}
        <Link to="/" role="link">
          here
        </Link>
      </h3>
    </div>
  );
}

export default LogoutPage;
