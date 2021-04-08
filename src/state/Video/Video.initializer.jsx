const initialState = {
  search: '',
  videos: [],
  alert: { type: '', message: '' },
};

const initializer = (initialValue = initialState) => initialValue;

export default initializer;
