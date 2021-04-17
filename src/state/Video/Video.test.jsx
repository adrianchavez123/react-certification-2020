import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useVideo } from './Video.provider';
import actions from './Video.actions';
import youtubeMockVideos from '../../mocks/youtube-videos-mock.json';

const { items } = youtubeMockVideos;
const initialState = {
  search: '',
  videos: [],
  alert: { type: '', message: '' },
};

jest.mock('./Video.reducer.jsx', () => jest.fn());
const reducer = require('./Video.reducer.jsx');

reducer.mockImplementation(() => {
  return {
    search: '',
  };
});

describe('useVideo', () => {
  it('retrieves the initial context state', async () => {
    const { result } = renderHook(() => useVideo());
    expect(result.current).toEqual({
      search: '',
      videos: [...items],
      alert: { type: '', message: '' },
    });
  });
  it('throws expection when context is null', async () => {
    React.useContext = jest.fn().mockImplementation(() => ({
      expenses: [],
      setExpenses: [],
    }));
    React.useContext = jest.fn().mockReturnValue(undefined);
    const { result } = renderHook(() => {
      useVideo();
    });
    expect(result.current).toEqual(undefined);
  });
});

describe('test reducer responses', () => {
  it('updates searching video state', async () => {
    reducer(initialState, actions.searchVideo);
    expect(reducer).toHaveBeenCalled();
    expect(reducer).toHaveBeenCalledWith(initialState, actions.searchVideo);
  });

  it('updates info message', async () => {
    reducer(initialState, actions.displayInfo);
    expect(reducer).toHaveBeenCalled();
    expect(reducer).toHaveBeenCalledWith(initialState, actions.displayInfo);
  });

  it('updates error message', async () => {
    reducer(initialState, actions.displayError);
    expect(reducer).toHaveBeenCalled();
    expect(reducer).toHaveBeenCalledWith(initialState, actions.displayError);
    const action = {
      type: actions.displayError,
      payload: { message: 'Error', type: 'danger' },
    };
    reducer.mockImplementation(() => {
      return {
        ...initialState,
        alert: { ...action.payload, type: 'danger' },
      };
    });
    expect(reducer(initialState, action)).toEqual({
      search: '',
      videos: [],
      alert: { message: 'Error', type: 'danger' },
    });
  });

  it('clears the message state', async () => {
    reducer(initialState, actions.closeDialog);
    expect(reducer).toHaveBeenCalled();
    expect(reducer).toHaveBeenCalledWith(initialState, actions.closeDialog);
    const action = {
      type: actions.closeDialog,
      payload: {
        alert: { message: '', type: '' },
      },
    };
    reducer.mockImplementation(() => {
      return {
        ...initialState,
        alert: { message: '', type: '' },
      };
    });
    expect(reducer(initialState, action)).toEqual(initialState);
  });

  it('updates videos list', async () => {
    reducer(initialState, actions.videoList);
    expect(reducer).toHaveBeenCalled();
    expect(reducer).toHaveBeenCalledWith(initialState, actions.videoList);
    const action = {
      type: actions.videoList,
      payload: {
        videos: [{ videoId: 'fdfdsfsd' }],
      },
    };
    reducer.mockImplementation(() => {
      return {
        ...initialState,
        videos: [...action.payload.videos],
      };
    });
    expect(reducer(initialState, action)).toEqual({
      search: '',
      videos: [{ videoId: 'fdfdsfsd' }],
      alert: { type: '', message: '' },
    });
  });

  it("clears videos' list", async () => {
    reducer(initialState, actions.clearVideoList);
    expect(reducer).toHaveBeenCalled();
    expect(reducer).toHaveBeenCalledWith(initialState, actions.clearVideoList);
    const action = {
      type: actions.clearVideoList,
      payload: {
        videos: [],
      },
    };
    reducer.mockImplementation(() => {
      return initialState;
    });
    expect(reducer(initialState, action)).toEqual(initialState);
  });
});

describe('actions', () => {
  expect(actions).toEqual({
    searchVideo: 'SEARCH_VIDEO',
    displayError: 'DSIPLAY_ERROR',
    displayInfo: 'DISPLAY_INFO',
    videoList: 'VIDEO_LIST',
    clearVideoList: 'CLEAR_VIDEO_LIST',
  });
});
