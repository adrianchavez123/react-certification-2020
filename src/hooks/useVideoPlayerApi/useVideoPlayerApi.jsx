import { useEffect, useCallback, useState } from 'react';

function useVideoPlayerApi({ type = 'SEARCH', payload = '' }) {
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const buildVideoDetailsResponse = (data) => {
    const {
      title,
      description,
      tags,
      thumbnails: {
        default: { url },
      },
    } = data.snippet;
    const { viewCount, likeCount, dislikeCount } = data.statistics;
    return {
      title,
      description,
      tags,
      likes: likeCount,
      dislikes: dislikeCount,
      views: viewCount,
      url,
    };
  };

  const buildResponse = useCallback(
    (data) => {
      return type === 'VIDEO_DETAILS' ? buildVideoDetailsResponse(data) : null;
    },
    [type]
  );

  const fetchVideoDetails = useCallback(async () => {
    setIsLoading(true);

    if (!payload) {
      setError("Please, make sure video's is correct.");
      return;
    }
    try {
      let endPoint = `${process.env.REACT_APP_YOUTUBE_VIDEO_SEARCH_ENDPOINT}${payload}&key=${process.env.REACT_APP_YOUTUBE_DATA_KEY}`;
      if (type === 'VIDEO_DETAILS') {
        endPoint = `${process.env.REACT_APP_YOUTUBE_VIDEO_DETAILS_ENDPOINT}${payload}&key=${process.env.REACT_APP_YOUTUBE_DATA_KEY}`;
      }
      const youtubeResponse = await fetch(endPoint);
      const data = await youtubeResponse.json();
      if (data?.items) {
        const [videoDetails] = data.items;

        setResponse(buildResponse(videoDetails));
      }
      if (data?.error) {
        throw new Error(data.error.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [payload, type, buildResponse]);

  useEffect(() => {
    fetchVideoDetails();
  }, [fetchVideoDetails]);

  return { response, isLoading, error };
}

export default useVideoPlayerApi;
