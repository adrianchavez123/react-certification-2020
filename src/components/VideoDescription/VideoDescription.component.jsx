import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faEye } from '@fortawesome/free-solid-svg-icons';
import { MiniStyledButton } from '../Button/Button.styles';
import Tags from '../Tags';
import {
  VideoDescriptionContainer,
  VideoTitle,
  VideoStatistics,
  VideoRating,
} from './VideoDescription.styles';
import { useUserAccount } from '../../state/User';

function VideoDescription({ video, updateFavoriteList, favoriteLabel }) {
  const {
    state: { authenticated },
  } = useUserAccount();
  return (
    <VideoDescriptionContainer>
      <VideoTitle>{video.title}</VideoTitle>
      <VideoStatistics>
        <Tags labels={video.tags} />
        <VideoRating>
          {authenticated && (
            <MiniStyledButton type="button" onClick={updateFavoriteList}>
              {favoriteLabel}
            </MiniStyledButton>
          )}
          <span>
            Likes <FontAwesomeIcon icon={faThumbsUp} /> : {video.likes}
          </span>
          <span>
            Dislikes <FontAwesomeIcon icon={faThumbsDown} /> : {video.dislikes}
          </span>
          <span>
            Views <FontAwesomeIcon icon={faEye} /> : {video.views}
          </span>
        </VideoRating>
      </VideoStatistics>
      <p>{video.description}</p>
    </VideoDescriptionContainer>
  );
}

export default VideoDescription;
