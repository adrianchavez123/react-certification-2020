import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import CheckBoxSwitch from '../../CheckBoxSwitch';

const Profile = styled.div`
  :hover {
    color: black;
  }
  padding-right: 20px;
  font-size: 2.2rem;
  cursor: pointer;
  position: relative;
`;

const PreferenceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

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
