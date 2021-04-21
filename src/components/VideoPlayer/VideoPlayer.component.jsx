import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useVideo, actions } from '../../state/Video';
import { useUserAccount, actions as userActions } from '../../state/User';
import useVideoDescriptionApi from '../../hooks/useVideoDescriptionApi';
import VideoSuggestions from '../VideoSuggestions';
import VideoWrapper from '../VideoWrapper/VideoWrapper.component';
import VideoDescription from '../VideoDescription';
import {
  VideoPlayerContainer,
  Video,
  AsideSuggestions,
  Info,
} from './VideoPlayer.styles';

function VideoPlayer({ videoId, showMenu }) {
  const history = useHistory();
  const { dispatch } = useVideo();
  const {
    state: { favoriteVideos },
    dispatch: userDispatcher,
  } = useUserAccount();
  const { video, isLoading, error } = useVideoDescriptionApi({
    videoId,
  });

  const [favoriteVerb, setFavoriteVerb] = useState('add to');
  const favoriteLabel = (
    <>
      {favoriteVerb === 'add to' ? (
        <FontAwesomeIcon icon={faStar} />
      ) : (
        <FontAwesomeIcon icon={faTimes} />
      )}
      {` ${favoriteVerb} Favorites`}
    </>
  );

  const updateFavoriteList = () => {
    const videoIndex = favoriteVideos.findIndex((v) => {
      return v.videoId === videoId;
    });
    if (videoIndex > -1) {
      userDispatcher({
        type: userActions.removeFavoriteVideo,
        payload: {
          removeVideo: videoId,
        },
      });
    } else {
      userDispatcher({
        type: userActions.addFavoriteVideo,
        payload: {
          addVideo: {
            videoId,
            title: video.title,
            description: video.description,
            url: video.url,
          },
        },
      });
    }
  };

  useEffect(() => {
    if (error) {
      dispatch({
        type: actions.displayError,
        payload: {
          type: 'danger',
          message: `Something when wrong, Error(${error}), please watch another video.`,
        },
      });
      history.push('/');
    }
  }, [error, dispatch, history]);

  useEffect(() => {
    const videoIndex = favoriteVideos.findIndex((v) => {
      return v.videoId === videoId;
    });
    if (videoIndex > -1) {
      setFavoriteVerb('remove from');
    } else {
      setFavoriteVerb('add to');
    }
  }, [favoriteVideos, videoId]);
  return (
    <VideoPlayerContainer showMenu={showMenu}>
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
          <VideoDescription
            video={video}
            updateFavoriteList={updateFavoriteList}
            favoriteLabel={favoriteLabel}
          />
        )}
      </Info>
    </VideoPlayerContainer>
  );
}

export default VideoPlayer;
