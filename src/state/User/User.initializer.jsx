import { storage } from '../../utils/storage';

const initialState = {
  authenticated: false,
  email: '',
  theme: 'light',
  favoriteVideos: [],
  showMenu: false,
  name: '',
  avatarUrl: '',
  closeModal: false,
};

const initializer = (initialValue = initialState) =>
  JSON.parse(storage.get(process.env.REACT_APP_USER_ACCOUNT)) || initialValue;

export default initializer;
export { initialState };
