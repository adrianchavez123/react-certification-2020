import styled from 'styled-components';

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-overflow: ellipsis;
  color: #003bc7;
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
  max-width: 400px;
  transform: scale(1);
  width: 100%;
  height: 50%;
  margin: 0;
  object-fit: contain;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 1rem;
  line-height: 18px;
  color: #003f87;
`;

const Box = styled.div`
  :hover {
    box-shadow: 2px 5px 10px 1px rgb(0, 0, 0, 0.253);
  }
  margin: 0.5rem;
  max-height: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #e8daff;
  background: #fff;
`;

export { Box, Title, ImageContainer, Image, Text, DescriptionContainer };
