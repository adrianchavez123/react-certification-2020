import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  width: 100vw;
  height: 10vh;
  background: ${(props) => props.theme.navBackground};
  color: ${(props) => props.theme.navFontColor};
  box-shadow: 0px 0px 2px 2px ${(props) => props.theme.navBorderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavTitle = styled(Link)`
  @media only screen and (max-width: 900px) {
    font-size: 0.9rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  :hover {
    color: ${(props) => props.theme.navHoverFontColor};
  }
  font-size: 1.2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  margin: 2%;
`;

const Bars = styled.div`
  :hover {
    color: ${(props) => props.theme.navHoverFontColor};
    cursor: pointer;
  }
  font-size: 2.2rem;
`;

export { Nav, NavTitle, Bars };
