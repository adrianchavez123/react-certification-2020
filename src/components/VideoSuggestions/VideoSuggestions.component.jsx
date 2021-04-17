import React from 'react';
import VideoItem from '../VideoList/VideoItem';
import { useVideo } from '../../state/Video';

function VideoSuggestions({ videoId }) {
  const { state } = useVideo();
  const { videos } = state;

  return (
    <div data-testid="video-suggestions">
      {videos
        .filter((item) => item.id?.videoId && item.id?.videoId !== videoId)
        .map((video) => (
          <VideoItem
            key={video.id.videoId}
            videoId={video.id.videoId}
            title={video.snippet.title}
            publishedAt={video.snippet.publishedAt}
            image={video.snippet.thumbnails.default.url}
          />
        ))}
    </div>
  );
}
export default VideoSuggestions;
