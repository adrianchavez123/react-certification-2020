import styled from 'styled-components';

const VideoPlayerContainer = styled.div.attrs((props) => ({
  showMenu: props.showMenu,
}))`
  width: ${(props) => (props.showMenu ? '80vw' : '100vw')};
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 25vw;
  grid-template-rows: 1fr 25vh;
  grid-template-areas:
    'video   suggestions'
    'info   suggestions';
  background-color: ${(props) => props.theme.pageBackground};

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
  border-bottom: 1px solid ${(props) => props.theme.navBackground};
  border-right: 1px solid ${(props) => props.theme.navBackground};
  box-shadow: 0px 5px 0px 2px ${(props) => props.theme.navFontColor};
`;

const AsideSuggestions = styled.div`
  grid-area: suggestions;
  overflow: auto;
  border-left: 2px solid ${(props) => props.theme.navBackground};
`;

const Info = styled.div`
  grid-area: info;
  overflow: auto;
`;

export { VideoPlayerContainer, Video, AsideSuggestions, Info };
