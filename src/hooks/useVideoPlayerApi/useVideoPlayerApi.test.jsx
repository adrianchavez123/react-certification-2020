import { renderHook, act } from '@testing-library/react-hooks';
import useVideoPlayerApi from './useVideoPlayerApi';

const video = {
  title: 'Video title',
  videoId: 'Po3VwR_NNGk',
  description: 'description',
};

const videoDetails = {
  type: 'VIDEO_DETAILS',
  payload: 'Po3VwR_NNGk',
};

const searchVideo = {
  type: 'SEARCH',
  payload: 'wizeline',
};
const getControlledPromise = () => {
  let deferred;
  const promise = new Promise((resolve, reject) => {
    deferred = { resolve, reject };
  });
  return { deferred, promise };
};

describe('useVideoPlayerApi', () => {
  it('fetches the video details', async () => {
    global.fetch = jest.fn();

    await act(async () => renderHook(() => useVideoPlayerApi(videoDetails)));

    expect(global.fetch).toBeCalledWith(
      `${process.env.REACT_APP_YOUTUBE_VIDEO_DETAILS_ENDPOINT}${videoDetails.payload}&key=${process.env.REACT_APP_YOUTUBE_DATA_KEY}`
    );

    await act(async () => renderHook(() => useVideoPlayerApi(searchVideo)));

    expect(global.fetch).toBeCalledWith(
      `${process.env.REACT_APP_YOUTUBE_VIDEO_DETAILS_ENDPOINT}${searchVideo.payload}&key=${process.env.REACT_APP_YOUTUBE_DATA_KEY}`
    );
  });

  describe('while fetching data', () => {
    it('handles loading state correctly', async () => {
      const { deferred, promise } = getControlledPromise();

      global.fetch = jest.fn(() => promise);

      const { result, waitForNextUpdate } = renderHook(() =>
        useVideoPlayerApi(videoDetails)
      );

      expect(result.current.isLoading).toBe(true);
      deferred.resolve();

      await waitForNextUpdate();
      expect(result.current.isLoading).toBe(false);
    });
  });

  describe('when got data succesfully', () => {
    it('handle loading succesful state correctly', async () => {
      const { deferred, promise } = getControlledPromise();
      global.fetch = jest.fn(() => promise);

      const { result, waitForNextUpdate } = renderHook(() =>
        useVideoPlayerApi(videoDetails)
      );

      deferred.resolve({ json: () => video });

      await waitForNextUpdate();

      expect(result.current.video).toHaveProperty('title');
    });
  });

  describe('with an error during request', () => {
    it('handle error state correcty', async () => {
      global.fetch = jest.fn(() => {
        return new Promise(() => {
          throw Error('The fetch failed');
        });
      });

      const { result, waitForNextUpdate } = renderHook(() =>
        useVideoPlayerApi(videoDetails)
      );
      await waitForNextUpdate();

      expect(result.current.error).toStrictEqual('The fetch failed');
    });
  });
});
