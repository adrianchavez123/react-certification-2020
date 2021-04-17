import styled from 'styled-components';

const HomeTitle = styled.h1`
  font-weight: 300;
  color: ${(props) => props.theme.titleColor};
  text-align: center;
`;

const Main = styled.div.attrs((props) => ({
  updateGrid: props.updateGrid,
}))`
  border: 1px solid ${(props) => props.theme.navBorderColor};
  background-color: ${(props) => props.theme.pageBackground};
  display: grid;
  grid-template-columns: ${(props) => (props.updateGrid ? '20% 1fr' : '1fr')};
`;

const HomeContainer = styled.div`
  height: 90vh;
  overflow: auto;
`;

export { HomeTitle, Main, HomeContainer };
