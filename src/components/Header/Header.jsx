import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SearchingBar from './SearchingBar';
import Preferences from './Preferences';

const Nav = styled.div`
  width: 100vw;
  height: 10vh;
  background: #0040b3;
  color: #f2f3ff;
  box-shadow: 0px 0px 2px 2px #576ff5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const NavTitle = styled.a`
  @media only screen and (max-width: 900px) {
    font-size: 0.9rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  :hover {
    color: black;
  }
  font-size: 1.2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  margin: 2%;
`;

const Bars = styled.div`
  :hover {
    color: black;
    cursor: pointer;
  }
  font-size: 2.2rem;
`;

export default function Header() {
  return (
    <Nav>
      <Bars>
        <FontAwesomeIcon icon={faBars} />
      </Bars>
      <NavTitle href={process.env.HOME_URL}>reactbootcamp 2021</NavTitle>
      <SearchingBar />
      <Preferences />
    </Nav>
  );
}
