import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Title,
  ImageContainer,
  Image,
  Text,
  DescriptionContainer,
} from './Card.styles';

function Card({ title, description, image, videoId }) {
  return (
    <Link to={`/${videoId}`}>
      <Box>
        <ImageContainer>
          <Image src={image} alt={title} />
        </ImageContainer>
        <DescriptionContainer>
          <Title>{title}</Title>
          <Text tooltip={description}>{description}</Text>
        </DescriptionContainer>
      </Box>
    </Link>
  );
}
export default Card;
