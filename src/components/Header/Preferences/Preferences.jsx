import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import CheckBoxSwitch from '../../CheckBoxSwitch';
import { Profile, PreferenceContainer } from './Preferences.styles';

function Preferences() {
  const [show, setShow] = useState(false);
  let style = 'dropdown-content';
  if (show) {
    style += ' show';
  }
  return (
    <PreferenceContainer>
      <CheckBoxSwitch>Dark mode</CheckBoxSwitch>
      <Profile>
        <FontAwesomeIcon icon={faUserCircle} onClick={() => setShow(!show)} />
        <div className={style}>
          <a href="/login">Login</a>
        </div>
      </Profile>
    </PreferenceContainer>
  );
}

export default Preferences;
