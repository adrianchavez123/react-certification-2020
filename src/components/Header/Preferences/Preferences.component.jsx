import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import CheckBoxSwitch from '../../CheckBoxSwitch';
import { useUserAccount } from '../../../state/User';
import { Profile, PreferenceContainer } from './Preferences.styles';

function Preferences() {
  const [show, setShow] = useState(false);
  const {
    state: { authenticated },
  } = useUserAccount();
  let style = 'dropdown-content';
  if (show) {
    style += ' show';
  }
  return (
    <PreferenceContainer data-testid="preferences">
      <CheckBoxSwitch>Dark mode</CheckBoxSwitch>
      <Profile>
        <FontAwesomeIcon
          data-testid="preferences-icon"
          icon={faUserCircle}
          onClick={() => setShow(!show)}
        />
        <div data-testid="preferences-dropdown" className={style}>
          {authenticated ? <a href="/logout">Logout</a> : <a href="/login">Login</a>}
        </div>
      </Profile>
    </PreferenceContainer>
  );
}

export default Preferences;
