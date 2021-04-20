import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import CheckBoxSwitch from '../../CheckBoxSwitch';
import { useUserAccount, actions } from '../../../state/User';
import { Profile, PreferenceContainer, AuthenticatedAvatar } from './Preferences.styles';

function Preferences() {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const {
    state: { authenticated, name, avatarUrl },
    dispatch,
  } = useUserAccount();
  const openCloseDropDown = () => {
    setShow(!show);
    dispatch({
      type: actions.openLoginModal,
      payload: {},
    });
  };
  let style = 'dropdown-content';
  if (show) {
    style += ' show';
  }
  return (
    <PreferenceContainer data-testid="preferences">
      <CheckBoxSwitch>Dark mode</CheckBoxSwitch>
      <Profile onClick={openCloseDropDown}>
        {authenticated ? (
          <>
            <span>{name}</span>
            <AuthenticatedAvatar avatarUrl={avatarUrl} data-testid="preferences-icon" />
          </>
        ) : (
          <FontAwesomeIcon data-testid="preferences-icon" icon={faUserCircle} />
        )}
        <div data-testid="preferences-dropdown" className={style}>
          {authenticated ? (
            <a href="/logout">Logout</a>
          ) : (
            <Link
              to={{
                pathname: '/login',
                state: { background: location },
              }}
            >
              Login
            </Link>
          )}
        </div>
      </Profile>
    </PreferenceContainer>
  );
}

export default Preferences;
