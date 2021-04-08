import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import VideoList from '../../components/VideoList';
import Dialog from '../../components/Dialog';
import VideoPlayer from '../../components/VideoPlayer';
import { useVideo } from '../../state/Video';
import { HomeTitle, Main } from './Home.styles';

function HomePage() {
  const { state } = useVideo();
  const { alert } = state;
  const { videoId } = useParams();
  if (videoId === 'secret') {
    return <Redirect to="/" />;
  }
  let content = (
    <Main>
      <HomeTitle>Welcome to the Challenge!</HomeTitle>
      <VideoList />
    </Main>
  );
  if (videoId) {
    content = <VideoPlayer videoId={videoId} />;
  }
  return (
    <div>
      <Header />
      {alert.message ? <Dialog message={alert.message} type={alert.type} /> : null}
      {content}
    </div>
  );
}

export default HomePage;
