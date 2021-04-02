import React, { useContext, useState, useMemo } from 'react';
import youtubeMockVideos from '../../mocks/youtube-videos-mock.json';

const { items } = youtubeMockVideos;

const VideoContext = React.createContext({
  search: '',
  videos: [],
  alert: { type: '', message: '' },
});

function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function VideoProvider({ children }) {
  const [search, setSearch] = useState('');
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [videos, setVideos] = useState(items);

  const providerValue = useMemo(
    () => ({ search, setSearch, videos, setVideos, alert, setAlert }),
    [search, setSearch, videos, setVideos, alert, setAlert]
  );
  return <VideoContext.Provider value={providerValue}>{children}</VideoContext.Provider>;
}

export { useVideo };
export default VideoProvider;
