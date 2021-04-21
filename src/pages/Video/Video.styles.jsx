import styled from 'styled-components';

const Main = styled.div.attrs((props) => ({
  updateGridLayout: props.updateGridLayout,
}))`
  border: 1px solid ${(props) => props.theme.navBorderColor};
  background-color: ${(props) => props.theme.pageBackground};
  display: grid;
  grid-template-columns: ${(props) => (props.updateGridLayout ? '20% 1fr' : '1fr')};
`;

export { Main };
