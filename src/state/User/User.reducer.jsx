import actions from './User.actions';

function reducer(state, action) {
  switch (action.type) {
    case actions.login: {
      return {
        ...state,
        authenticated: action.payload.authenticated,
        email: action.payload.email,
        name: action.payload.name,
        avatarUrl: action.payload.avatarUrl,
        closeModal: true,
      };
    }
    case actions.logout: {
      return {
        ...state,
        authenticated: action.payload.authenticated || false,
        email: action.payload.email || '',
        showMenu: action.payload.showMenu || false,
        favoriteVideos: [],
        theme: 'light',
        name: '',
        avatarUrl: '',
      };
    }
    case actions.addFavoriteVideo: {
      return {
        ...state,
        favoriteVideos: [...state.favoriteVideos, action.payload.addVideo],
      };
    }
    case actions.removeFavoriteVideo: {
      const { removeVideo } = action.payload;
      return {
        ...state,
        favoriteVideos: state.favoriteVideos.filter(
          (video) => video.videoId !== removeVideo
        ),
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
    case actions.showMenu: {
      return {
        ...state,
        showMenu: action.payload.showMenu,
      };
    }
    case actions.closeLoginModal: {
      return {
        ...state,
        closeModal: true,
      };
    }
    case actions.openLoginModal: {
      return {
        ...state,
        closeModal: false,
      };
    }
    default:
      throw new Error('Unkown action');
  }
}

export default reducer;
