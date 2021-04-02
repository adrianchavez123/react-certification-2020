import React from 'react';
import { Link } from 'react-router-dom';
import {
  SuggestionBox,
  ImageContainer,
  Image,
  Title,
  DescriptionContainer,
  PublishedDate,
} from './VideoSuggestion.styles';

function VideoSuggestion({ title, image, videoId, publishedAt }) {
  return (
    <Link to={`/${videoId}`}>
      <SuggestionBox>
        <ImageContainer>
          <Image src={image} alt={title} />
        </ImageContainer>
        <DescriptionContainer>
          <Title>{title}</Title>
          <PublishedDate>{new Date(publishedAt).toUTCString()}</PublishedDate>
        </DescriptionContainer>
      </SuggestionBox>
    </Link>
  );
}
export default VideoSuggestion;
