import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import VideoList from '../../components/VideoList';
import Dialog from '../../components/Dialog';
import VideoPlayer from '../../components/VideoPlayer';
import { useVideo } from '../../providers/Video';

function HomePage() {
  const { alert } = useVideo();
  const { videoId } = useParams();
  let content = (
    <>
      <h1>Welcome to the Challenge!</h1>
      <VideoList />
    </>
  );
  if (videoId) {
    content = <VideoPlayer videoId={videoId} />;
  }
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      {alert.message ? <Dialog message={alert.message} type={alert.type} /> : null}
      {content}
    </div>
  );
}

export default HomePage;
