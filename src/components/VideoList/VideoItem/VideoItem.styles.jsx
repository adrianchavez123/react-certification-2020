import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ItemLink = styled(Link)`
  display: inline-block;
  width: 100%;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-overflow: ellipsis;
  padding: 0 10px;
`;
const Text = styled.p`
  font-size: 0.8rem;
  line-height: 18px;
  color: ${(props) => props.theme.paragraphColor};
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
  color: ${(props) => props.theme.titleColor};
`;

const PublishedDate = styled.h4`
  font-size: 0.6rem;
  color: ${(props) => props.theme.paragraphColor};
`;

const SuggestionBox = styled.div`
  :hover {
    box-shadow: 1px 3px 50px 1px rgb(0, 0, 0, 0.253);
  }
  margin: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid #e8daff;
  background-color: ${(props) => props.theme.pageBackground};
`;

export {
  SuggestionBox,
  Title,
  ImageContainer,
  Image,
  Text,
  DescriptionContainer,
  PublishedDate,
  ItemLink,
};
