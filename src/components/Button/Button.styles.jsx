import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.searchingBackground};
  font-size: 1.5rem;
  :hover {
    color: ${(props) => props.theme.navHoverFontColor};
    background-color: ${(props) => props.theme.navBackground};
  }
  font-size: 1.2rem;
  text-decoration: none;
  color: #fff;
  padding: 2%;
`;

const MiniStyledButton = styled(StyledButton)`
  align-self: center;
  justify-self: center;
  padding: 0;
  display: inline-flex;
  margin-right: 10px;
  font-size: 0.9rem;
`;
export { StyledButton, MiniStyledButton };
