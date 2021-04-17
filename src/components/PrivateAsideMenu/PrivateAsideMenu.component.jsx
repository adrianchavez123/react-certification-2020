import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons';
import { AsideContainer, MenuLik } from './PrivateAsideMenu.styles';

function PrivateAsideMenu() {
  return (
    <AsideContainer>
      <ul>
        <li>
          <MenuLik to="/" role="link">
            <FontAwesomeIcon icon={faHome} /> Home
          </MenuLik>
        </li>
        <li>
          <MenuLik to="/favorites" role="link">
            <FontAwesomeIcon icon={faStar} /> Favorites
          </MenuLik>
        </li>
      </ul>
    </AsideContainer>
  );
}

export default PrivateAsideMenu;
