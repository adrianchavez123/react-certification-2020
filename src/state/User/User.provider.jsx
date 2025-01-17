import React, { useContext, useReducer, useEffect } from 'react';
import { storage } from '../../utils/storage';
import reducer from './User.reducer';
import initializer, { initialState } from './User.initializer';

const UserContext = React.createContext(initialState);

function useUserAccount() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(`Can't use "useUserAuth" without an UserProvider!`);
  }
  return context;
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState, initializer);
  useEffect(() => {
    storage.set(process.env.REACT_APP_USER_ACCOUNT, JSON.stringify(state));
  }, [state]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>
  );
}

export { useUserAccount };
export default UserProvider;
