import { renderHook, act } from '@testing-library/react-hooks';
import useVideoDescriptionApi from './useVideoDescriptionApi';

const video = {
  title: 'Video title',
  videoId: 'Po3VwR_NNGk',
  description: 'description',
};

const videoDetails = {
  videoId: 'Po3VwR_NNGk',
};

const getControlledPromise = () => {
  let deferred;
  const promise = new Promise((resolve, reject) => {
    deferred = { resolve, reject };
  });
  return { deferred, promise };
};

describe('useVideoDescriptionApi', () => {
  it('fetches the video details', async () => {
    global.fetch = jest.fn();

    await act(async () => renderHook(() => useVideoDescriptionApi(videoDetails)));

    expect(global.fetch).toBeCalledWith(
      `${process.env.REACT_APP_YOUTUBE_VIDEO_DETAILS_ENDPOINT}${videoDetails.videoId}&key=${process.env.REACT_APP_YOUTUBE_DATA_KEY}`
    );
  });

  describe('while fetching data', () => {
    it('handles loading state correctly', async () => {
      const { deferred, promise } = getControlledPromise();

      global.fetch = jest.fn(() => promise);

      const { result, waitForNextUpdate } = renderHook(() =>
        useVideoDescriptionApi(videoDetails)
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
        useVideoDescriptionApi(videoDetails)
      );

      deferred.resolve({ json: () => video });

      await waitForNextUpdate();

      expect(result.current).toHaveProperty('video');
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
        useVideoDescriptionApi(videoDetails)
      );
      await waitForNextUpdate();

      expect(result.current.error).toStrictEqual('The fetch failed');
    });
  });
});
