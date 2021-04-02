import React from 'react';
import YouTube from 'react-youtube';
import useWindowSize from '../../hooks/useWindowSize/useWindowSize';
import './VideoWrapper.styles.css';

function VideoWrapper({ videoId }) {
  const [width, height] = useWindowSize();

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: +height * 0.65,
    width: +width * 0.75,
  };
  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={onReady}
      containerClassName="youtubeContainer"
    />
  );
}

export default VideoWrapper;
