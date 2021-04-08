import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useVideo, actions } from '../../state/Video';
import useVideoPlayerApi from '../../hooks/useVideoPlayerApi';
import VideoSuggestions from '../VideoSuggestions';
import {
  VideoPlayerContainer,
  Video,
  AsideSuggestions,
  Info,
  VideoDescription,
  VideoStatistics,
  Tags,
  Tag,
  VideoRating,
  VideoTitle,
} from './VideoPlayer.styles';
import VideoWrapper from '../VideoWrapper/VideoWrapper.component';

function VideoPlayer({ videoId }) {
  const { dispatch } = useVideo();
  const { video, isLoading, error } = useVideoPlayerApi({
    type: 'VIDEO_DETAILS',
    payload: videoId,
  });

  if (error) {
    // setAlert({ type: 'danger', message: error });
    dispatch({
      type: actions.displayError,
      payload: {
        type: 'danger',
        message: error,
      },
    });
  }

  return (
    <VideoPlayerContainer>
      <Video>
        <VideoWrapper videoId={videoId} />
      </Video>
      <AsideSuggestions>
        <VideoSuggestions videoId={videoId} />
      </AsideSuggestions>
      <Info>
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <VideoDescription>
            <VideoTitle>{video.title}</VideoTitle>
            <VideoStatistics>
              <Tags>
                {video?.tags ? video.tags.map((tag) => <Tag key={tag}>{tag}</Tag>) : null}
              </Tags>
              <VideoRating>
                <span>
                  <FontAwesomeIcon icon={faThumbsUp} /> Likes: {video.likes}
                </span>
                <span>
                  <FontAwesomeIcon icon={faThumbsDown} /> Dislikes: {video.dislikes}
                </span>
                <span>
                  <FontAwesomeIcon icon={faEye} /> Views: {video.views}
                </span>
              </VideoRating>
            </VideoStatistics>
            <p>{video.description}</p>
          </VideoDescription>
        )}
      </Info>
    </VideoPlayerContainer>
  );
}

export default VideoPlayer;
