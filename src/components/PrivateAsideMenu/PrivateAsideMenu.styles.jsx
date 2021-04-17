import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AsideContainer = styled.div`
  height: 90vh;
  background-color: ${(props) => props.theme.searchingBackground};
  box-shadow: 5px 0px 0px 0px rgb(0, 0, 0, 0.253);
  font-size: 1.5rem;

  & > ul {
    list-style-type: none;
  }
`;

const MenuLik = styled(Link)`
  @media only screen and (max-width: 900px) {
    font-size: 0.9rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  :hover {
    color: ${(props) => props.theme.navHoverFontColor};
    text-decoration: underline;
  }
  font-size: 1.2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  margin: 2%;
`;

export { AsideContainer, MenuLik };
