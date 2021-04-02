import React from 'react';
import VideoSuggestion from './videoSuggestion';
import { useVideo } from '../../providers/Video';

function VideoSuggestions({ videoId }) {
  const { videos } = useVideo();

  return (
    <div data-testid="video-suggestions">
      {videos
        .filter((item) => item.id?.videoId && item.id?.videoId !== videoId)
        .map((video) => (
          <VideoSuggestion
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
