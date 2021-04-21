import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router';
import { useUserAccount, actions } from '../../state/User';
import loginApi from '../../utils/login.api';
import './Login.styles.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('no-action');
  const { state, dispatch } = useUserAccount();

  const history = useHistory();

  if (state.authenticated) {
    return <Redirect to="/" />;
  }

  function authenticate(event) {
    event.preventDefault();
    loginApi(username, password)
      .then((user) => {
        const { avatarUrl, name } = user;
        dispatch({
          type: actions.login,
          payload: {
            authenticated: true,
            email: username,
            name,
            avatarUrl,
            closeModal: true,
          },
        });
        history.goBack();
      })
      .catch(() => {
        setStatus('non-registered');
      });
  }
  return (
    <div data-testid="login-form" className="login-page">
      <section className="login">
        <h1>Welcome back!</h1>
        <form onSubmit={authenticate} className="login-form">
          {status === 'non-registered' && (
            <span className="error-form">You are not a member</span>
          )}
          <div className="form-group">
            <label htmlFor="username">
              <strong>username </strong>
              <input
                id="username"
                required
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>password </strong>
              <input
                id="password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">login</button>
        </form>
      </section>
    </div>
  );
}

export default LoginPage;
