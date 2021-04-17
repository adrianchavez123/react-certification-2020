import React from 'react';
import Header from '../../components/Header';
import VideoGrid from '../../components/VideoGrid';
import Dialog from '../../components/Dialog';
import PrivateAsideMenu from '../../components/PrivateAsideMenu';

import { useVideo } from '../../state/Video';
import { useUserAccount } from '../../state/User';
import { HomeTitle, Main, HomeContainer } from './Home.styles';

function HomePage() {
  const {
    state: { alert },
  } = useVideo();
  const {
    state: { authenticated, showMenu },
  } = useUserAccount();

  const updateGrid = authenticated && showMenu;

  return (
    <div>
      <Header />
      {alert.message ? <Dialog message={alert.message} type={alert.type} /> : null}
      <Main updateGrid={updateGrid}>
        {showMenu ? <PrivateAsideMenu /> : null}
        <HomeContainer>
          <HomeTitle>Welcome to the Challenge!</HomeTitle>
          <VideoGrid />
        </HomeContainer>
      </Main>
    </div>
  );
}

export default HomePage;
