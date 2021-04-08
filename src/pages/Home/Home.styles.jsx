import styled from 'styled-components';

const HomeTitle = styled.h1`
  font-weight: 300;
  color: ${(props) => props.theme.titleColor};
  text-align: center;
`;

const Main = styled.div`
  border: 1px solid ${(props) => props.theme.navBorderColor};
  background-color: ${(props) => props.theme.pageBackground};
`;

export { HomeTitle, Main };
