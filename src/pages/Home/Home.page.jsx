import React from 'react';
import Header from '../../components/Header';
import VideoList from '../../components/VideoList';

function HomePage() {
  return (
    <div>
      <Header />
      <h1>Welcome to the Challenge!</h1>
      <VideoList />
    </div>
  );
}

export default HomePage;
