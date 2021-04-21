import styled from 'styled-components';

const Container = styled.div.attrs((props) => ({
  updateGrid: props.updateGrid,
}))`
  color: ${(props) => props.theme.titleColor};
  font-weight: 300;
  font-size: 1.5rem;
  height: 90vh;
  border: 1px solid ${(props) => props.theme.navBorderColor};
  background-color: ${(props) => props.theme.pageBackground};
  display: grid;
  grid-template-columns: ${(props) => (props.updateGrid ? '20% 1fr' : '1fr')};
`;

const PreSection = styled.div`
  display: flex;
  justify-content: center;

  pre {
    display: inline-block;
  }
`;

export { Container, PreSection };
