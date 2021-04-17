import styled from 'styled-components';

const VideoDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1% 5%;
  p {
    color: ${(props) => props.theme.videoParagraphColor};
  }
`;

const VideoStatistics = styled.div`
  display: flex;
  width: 100%;
  align-items: space-between;
  font-size: 0.8rem;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.videoParagraphColor};
`;

const VideoRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

const VideoTitle = styled.h1`
  font-weight: 300;
  color: ${(props) => props.theme.titleColor};
  text-align: center;
`;

export { VideoDescriptionContainer, VideoStatistics, VideoRating, VideoTitle };
