import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header';
import { StyledButton } from '../../components/Button/Button.styles';
import PrivateAsideMenu from '../../components/PrivateAsideMenu';
import VideoList from '../../components/VideoList';
import { useUserAccount, actions } from '../../state/User';
import { Title, FavoriteSection, FavoritesContainer } from './Favorites.styles';

function Favorites() {
  const {
    state: { favoriteVideos, authenticated, showMenu },
    dispatch,
  } = useUserAccount();

  const removeFavoriteVideo = (e, videoId) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: actions.removeFavoriteVideo,
      payload: {
        removeVideo: videoId,
      },
    });
  };

  const clearAll = (e) => {
    e.preventDefault();
    dispatch({
      type: actions.clearFavoriteVideos,
      payload: {},
    });
  };
  const updateGrid = authenticated && showMenu;
  const content = (
    <FavoriteSection updateGrid={updateGrid}>
      {showMenu ? <PrivateAsideMenu /> : null}
      <FavoritesContainer>
        <Title>Favorite videos!</Title>
        <VideoList
          videos={favoriteVideos}
          favoriteVideos
          removeFavoriteVideo={removeFavoriteVideo}
        />
        {favoriteVideos.length > 0 && (
          <StyledButton onClick={clearAll}>
            <FontAwesomeIcon data-testid="remove-all" icon={faTrash} /> Remove all
          </StyledButton>
        )}
      </FavoritesContainer>
    </FavoriteSection>
  );

  return (
    <div>
      <Header />
      {content}
    </div>
  );
}

export default Favorites;
