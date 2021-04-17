import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MiniStyledButton } from '../../Button/Button.styles';
import {
  SuggestionBox,
  ImageContainer,
  Image,
  Title,
  DescriptionContainer,
  PublishedDate,
  ItemLink,
} from './VideoItem.styles';

function VideoItem({
  title,
  image,
  videoId,
  publishedAt,
  description,
  favorite = false,
  removeFavoriteVideo,
}) {
  return (
    <ItemLink to={`/${videoId}`}>
      <SuggestionBox>
        <ImageContainer>
          <Image src={image} alt={title} />
        </ImageContainer>
        <DescriptionContainer>
          <Title>{title}</Title>
          {description ? (
            <p title={description}>
              {description.length > 250
                ? `${description.substring(0, 250)}...`
                : description}
            </p>
          ) : (
            <PublishedDate>{new Date(publishedAt).toUTCString()}</PublishedDate>
          )}
        </DescriptionContainer>
        {favorite ? (
          <MiniStyledButton onClick={(e) => removeFavoriteVideo(e, videoId)}>
            <FontAwesomeIcon data-testid="preferences-icon" icon={faTimes} />
            {'  '} remove
          </MiniStyledButton>
        ) : null}
      </SuggestionBox>
    </ItemLink>
  );
}
export default VideoItem;
