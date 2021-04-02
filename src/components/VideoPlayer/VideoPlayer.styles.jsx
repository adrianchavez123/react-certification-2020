import styled from 'styled-components';

const VideoPlayerContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 25vw;
  grid-template-rows: 1fr 25vh;
  grid-template-areas:
    'video   suggestions'
    'info   suggestions';

  @media only screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'video'
      'info'
      'suggestions';
    height: auto;
  }
`;

const Video = styled.div`
  grid-area: video;
  border-bottom: 1px solid #576ff5;
  border-right: 1px solid #576ff5;
  box-shadow: 0px 5px 0px 2px #f2f3ff;
`;

const AsideSuggestions = styled.div`
  grid-area: suggestions;
  overflow: auto;
  border-left: 2px solid #576ff5;
`;

const Info = styled.div`
  grid-area: info;
  overflow: auto;
`;

const VideoDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1% 5%;
`;

const VideoStatistics = styled.div`
  display: flex;
  width: 100%;
  align-items: space-between;
  font-size: 0.8rem;
  justify-content: space-between;
  align-items: center;
`;

const Tags = styled.div`
  display: inline-block;
`;
const Tag = styled.span`
  padding: 0 10px;
  margin: 0 5px;
  background-color: #2196f3;
`;

const VideoRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;

export {
  VideoPlayerContainer,
  Video,
  AsideSuggestions,
  Info,
  VideoDescription,
  VideoStatistics,
  Tags,
  Tag,
  VideoRating,
};
