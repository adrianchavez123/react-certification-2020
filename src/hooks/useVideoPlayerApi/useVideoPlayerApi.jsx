import { useEffect, useCallback, useState } from 'react';

function useVideoPlayerApi({ type = 'SEARCH', payload = '' }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [views, setViews] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const video = {
    title,
    description,
    tags,
    likes,
    dislikes,
    views,
  };
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
      const response = await fetch(endPoint);
      const data = await response.json();
      if (data?.items) {
        const [videoDetails] = data.items;
        const {
          title: videoTitle,
          description: videoDescription,
          tags: videoTags,
        } = videoDetails.snippet;
        const { viewCount, likeCount, dislikeCount } = videoDetails.statistics;
        setTitle(videoTitle);
        setDescription(videoDescription);
        setTags(videoTags);
        setLikes(likeCount);
        setDislikes(dislikeCount);
        setViews(viewCount);
      }
      if (data?.error) {
        throw new Error(data.error.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [payload, type]);

  useEffect(() => {
    fetchVideoDetails();
  }, [fetchVideoDetails]);

  return { video, isLoading, error };
}

export default useVideoPlayerApi;
