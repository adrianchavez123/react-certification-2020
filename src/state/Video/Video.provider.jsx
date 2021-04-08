import React, { useContext, useReducer } from 'react';
import reducer from './Video.reducer';
import initializer from './Video.initializer';
import youtubeMockVideos from '../../mocks/youtube-videos-mock.json';

const { items } = youtubeMockVideos;

const initState = {
  search: '',
  videos: [...items],
  alert: { type: '', message: '' },
};

const VideoContext = React.createContext(initState);

function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`Can't use "useVideo" without an VideoProvider!`);
  }
  return context;
}

function VideoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState, initializer);

  return (
    <VideoContext.Provider value={{ state, dispatch }}>{children}</VideoContext.Provider>
  );
}

export { useVideo };
export default VideoProvider;
