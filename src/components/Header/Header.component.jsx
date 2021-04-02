import React from 'react';
import { Link } from 'react-router-dom';
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
      <NavTitle>
        <Link to="/" role="link">
          reactbootcamp 2021
        </Link>
      </NavTitle>
      <SearchingBar />
      <Preferences />
    </Nav>
  );
}
