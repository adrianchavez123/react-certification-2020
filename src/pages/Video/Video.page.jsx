import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Dialog from '../../components/Dialog';
import VideoPlayer from '../../components/VideoPlayer';
import PrivateAsideMenu from '../../components/PrivateAsideMenu';

import { useVideo } from '../../state/Video';
import { useUserAccount } from '../../state/User';
import { Main } from './Video.styles';

function Video() {
  const { videoId } = useParams();
  const {
    state: { alert },
  } = useVideo();
  const {
    state: { authenticated, showMenu },
  } = useUserAccount();

  const updateGridLayout = authenticated && showMenu;
  return (
    <div>
      <Header />
      {alert.message ? <Dialog message={alert.message} type={alert.type} /> : null}
      <Main updateGridLayout={updateGridLayout}>
        {showMenu ? <PrivateAsideMenu /> : null}
        <VideoPlayer videoId={videoId} showMenu={showMenu} />
      </Main>
    </div>
  );
}

export default Video;
