import { useEffect, useCallback, useState } from 'react';

function useVideoDescriptionApi({ videoId }) {
  const [video, setVideo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const buildVideoDetails = useCallback((data) => {
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
  }, []);

  const fetchVideoDetails = useCallback(async () => {
    setIsLoading(true);

    if (!videoId) {
      setError("Please, make sure video's is correct.");
      return;
    }
    try {
      const endPoint = `${process.env.REACT_APP_YOUTUBE_VIDEO_DETAILS_ENDPOINT}${videoId}&key=${process.env.REACT_APP_YOUTUBE_DATA_KEY}`;

      const youtubeResponse = await fetch(endPoint);
      const data = await youtubeResponse.json();
      if (data?.items) {
        const [videoDetails] = data.items;

        setVideo(buildVideoDetails(videoDetails));
      }
      if (data?.error) {
        throw new Error(data.error.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [videoId, buildVideoDetails]);

  useEffect(() => {
    fetchVideoDetails();
  }, [fetchVideoDetails]);

  return { video, isLoading, error };
}

export default useVideoDescriptionApi;
