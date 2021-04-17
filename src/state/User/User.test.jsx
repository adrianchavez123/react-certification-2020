import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useUserAccount } from './User.provider';
import actions from './User.actions';

const initialState = {
  authenticated: false,
  email: '',
  theme: 'light',
  favoriteVideos: [],
  showMenu: false,
};

jest.mock('./User.reducer.jsx', () => jest.fn());
const reducer = require('./User.reducer.jsx');

reducer.mockImplementation(() => {
  return {
    authenticated: false,
  };
});

describe('useUserAccount', () => {
  it('retrieves the initial context state', async () => {
    const { result } = renderHook(() => useUserAccount());
    expect(result.current).toEqual({
      authenticated: false,
      email: '',
      theme: 'light',
      favoriteVideos: [],
      showMenu: false,
    });
  });
  it('throws expection when context is null', async () => {
    React.useContext = jest.fn().mockImplementation(() => ({
      expenses: [],
      setExpenses: [],
    }));
    React.useContext = jest.fn().mockReturnValue(undefined);
    const { result } = renderHook(() => {
      useUserAccount();
    });
    expect(result.current).toEqual(undefined);
  });
});

describe('test reducer responses', () => {
  it('updates searching video state', async () => {
    reducer(initialState, actions.login);
    expect(reducer).toHaveBeenCalled();
    expect(reducer).toHaveBeenCalledWith(initialState, actions.login);
  });

  it('autheticates a user', async () => {
    reducer(initialState, actions.login);
    expect(reducer).toHaveBeenCalled();
    expect(reducer).toHaveBeenCalledWith(initialState, actions.login);
    const action = {
      type: actions.login,
      payload: { authenticated: true, email: 'test@gmail.com' },
    };
    reducer.mockImplementation(() => {
      return {
        ...initialState,
        authenticated: action.payload.authenticated,
        email: action.payload.email,
      };
    });
    expect(reducer(initialState, action)).toEqual({
      authenticated: true,
      email: 'test@gmail.com',
      theme: 'light',
      favoriteVideos: [],
      showMenu: false,
    });
  });
});

describe('actions', () => {
  expect(actions).toEqual({
    login: 'LOGIN',
    logout: 'LOGOUT',
    addFavoriteVideo: 'ADD_FAVORITE_VIDEO',
    removeFavoriteVideo: 'REMOVE_FAVORITE_VIDEO',
    clearFavoriteVideos: 'CLEAR_FAVORITE_VIDEOS',
    setTheme: 'SET_THEME',
    showMenu: 'SHOW_MENU',
  });
});
