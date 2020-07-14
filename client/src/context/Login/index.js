import React, { createContext, useReducer } from "react";
import {
  initialState as loginInitialState,
  reducer as loginReducer
} from "./reducers/login";

const LoginContext = createContext(null);

function combineReducers(reducerDict) {
  return function (state = {}, action) {
    return Object.keys(reducerDict).reduce((stateGlobal, curr) => {
      let slice = reducerDict[curr](state[curr], action);
      return { ...stateGlobal, [curr]: slice };
    }, state);
  };
}

const reducers = combineReducers({
    login: loginReducer
});

const initialState = {
    login: loginInitialState,
};

export const LoginProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <LoginContext.Provider value={{ state, dispatch }}>
        {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
