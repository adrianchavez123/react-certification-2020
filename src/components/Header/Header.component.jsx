import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SearchingBar from './SearchingBar';
import Preferences from './Preferences';
import { Nav, NavTitle, Bars } from './Header.styles';
import { useUserAccount, actions } from '../../state/User';

export default function Header() {
  const {
    state: { showMenu, authenticated },
    dispatch,
  } = useUserAccount();

  const openMenu = () => {
    if (!authenticated) {
      return;
    }
    dispatch({
      type: actions.showMenu,
      payload: {
        showMenu: !showMenu,
      },
    });
  };
  return (
    <Nav role="navigation">
      <Bars>
        <FontAwesomeIcon icon={faBars} onClick={openMenu} />
      </Bars>
      <NavTitle to="/" role="link">
        reactbootcamp 2021
      </NavTitle>
      <SearchingBar />
      <Preferences />
    </Nav>
  );
}
