import styled from 'styled-components';

const Title = styled.h1`
  font-weight: 300;
  color: ${(props) => props.theme.titleColor};
  text-align: center;
`;

const FavoriteSection = styled.div.attrs((props) => ({
  updateGrid: props.updateGrid,
}))`
  border: 1px solid ${(props) => props.theme.navBorderColor};
  background-color: ${(props) => props.theme.pageBackground};
  display: grid;
  grid-template-columns: ${(props) => (props.updateGrid ? '20% 1fr' : '1fr')};
`;

const FavoritesContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

export { Title, FavoriteSection, FavoritesContainer };
