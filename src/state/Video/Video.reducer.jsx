import actions from './Video.actions';

function reducer(state, action) {
  switch (action.type) {
    case actions.searchVideo: {
      return {
        ...state,
        search: action.payload.search,
      };
    }
    case actions.displayInfo: {
      return {
        ...state,
        alert: { ...action.payload, type: 'success' },
      };
    }
    case actions.displayError: {
      return {
        ...state,
        alert: { ...action.payload, type: 'danger' },
      };
    }

    case actions.closeDialog: {
      return {
        ...state,
        alert: { message: '', type: '' },
      };
    }
    case actions.videoList: {
      return {
        ...state,
        videos: [...action.payload.videos],
      };
    }
    case actions.clearVideoList: {
      return {
        ...state,
        videos: [],
      };
    }

    default:
      throw new Error('Unkown action');
  }
}

export default reducer;
