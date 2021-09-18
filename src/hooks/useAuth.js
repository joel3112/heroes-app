import { useEffect, useReducer } from 'react';

const ACTIONS = {
  LOGIN: 'login',
  LOGOUT: 'logout',
};

const ACTIONS_REDUCER = {
  [ACTIONS.LOGIN]: (_, action) => ({
    ...action.payload,
    logged: true,
  }),
  [ACTIONS.LOGOUT]: () => ({
    logged: false,
  }),
};

const authReducer = (state = {}, action) => {
  const actionReducer = ACTIONS_REDUCER[action.type];

  return actionReducer ? actionReducer(state, action) : state;
};

export const useAuth = () => {
  const storage = localStorage.getItem('user');
  const [user, dipatch] = useReducer(authReducer, storage ? JSON.parse(storage) : { logged: false });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return {
    login: (user) => dipatch({ type: ACTIONS.LOGIN, payload: user }),
    logout: () => dipatch({ type: ACTIONS.LOGOUT }),
    user,
  };
};
