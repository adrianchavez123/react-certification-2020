import styled from 'styled-components';

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-overflow: ellipsis;
  color: #003bc7;
  padding: 0 10px;
`;
const Text = styled.p`
  font-size: 0.8rem;
  line-height: 18px;
  color: #8695fa;
`;

const Image = styled.img`
  :hover {
    transform: scale(1.5);
  }
  width: 100%;
  transition: transform 0.5s ease;
`;

const ImageContainer = styled.div`
  max-width: 150px;
  transform: scale(1);
  width: 100%;
  height: 50%;
  margin: 0;
  object-fit: contain;
  overflow: hidden;
`;

const Title = styled.h4`
  font-size: 0.8rem;
  line-height: 1rem;
  color: #003f87;
`;

const PublishedDate = styled.h4`
  font-size: 0.6rem;
  color: black;
`;

const SuggestionBox = styled.div`
  :hover {
    box-shadow: 1px 3px 50px 1px rgb(0, 0, 0, 0.253);
  }
  margin: 0.5rem;
  display: flex;
  flex-direction: row;
  border: 2px solid #e8daff;
  background: #fff;
`;

export {
  SuggestionBox,
  Title,
  ImageContainer,
  Image,
  Text,
  DescriptionContainer,
  PublishedDate,
};
