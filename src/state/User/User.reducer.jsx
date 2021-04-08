import actions from './User.actions';

function reducer(state, action) {
  switch (action.type) {
    case actions.login: {
      return {
        ...state,
        authenticated: action.payload.authenticated,
        email: action.payload.email,
      };
    }
    case actions.logout: {
      return {
        ...state,
        authenticated: action.payload.authenticated || false,
        email: action.payload.email || null,
      };
    }
    case actions.addFavoriteVideo: {
      return {
        ...state,
        favoriteVideos: [...state.favoriteVideos, action.payload],
      };
    }
    case actions.removeFavoriteVideo: {
      const { videoId } = action.payload;
      return {
        ...state,
        favoriteVideos: state.favoriteVideos.filter((video) => video.videoId === videoId),
      };
    }
    case actions.clearFavoriteVideos: {
      return {
        ...state,
        favoriteVideos: [],
      };
    }
    case actions.setTheme: {
      return {
        ...state,
        theme: action.payload.theme,
      };
    }
    default:
      throw new Error('Unkown action');
  }
}

export default reducer;
