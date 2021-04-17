import React from 'react';
import VideoItem from './VideoItem';

function VideoList({ videos, favoriteVideos, removeFavoriteVideo }) {
  return videos.map((video) => (
    <VideoItem
      key={video.videoId}
      videoId={video.videoId}
      title={video.title}
      description={video.description}
      image={video.url}
      favorite={favoriteVideos}
      removeFavoriteVideo={removeFavoriteVideo}
    />
  ));
}

export default VideoList;
