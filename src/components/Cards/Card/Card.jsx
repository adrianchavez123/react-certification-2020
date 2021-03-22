import React from 'react';
import {
  Box,
  Title,
  ImageContainer,
  Image,
  Text,
  DescriptionContainer,
} from './Card.styles';

function Card({ title, description, image }) {
  return (
    <Box>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <DescriptionContainer>
        <Title>{title}</Title>
        <Text tooltip={description}>{description}</Text>
      </DescriptionContainer>
    </Box>
  );
}
export default Card;
