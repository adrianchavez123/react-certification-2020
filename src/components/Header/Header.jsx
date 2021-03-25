import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SearchingBar from './SearchingBar';
import Preferences from './Preferences';
import { Nav, NavTitle, Bars } from './Header.styles';

export default function Header() {
  return (
    <Nav role="navigation">
      <Bars>
        <FontAwesomeIcon icon={faBars} />
      </Bars>
      <NavTitle href={process.env.HOME_URL}>reactbootcamp 2021</NavTitle>
      <SearchingBar />
      <Preferences />
    </Nav>
  );
}
