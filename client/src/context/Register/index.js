import React, { createContext, useReducer } from "react";
import {
  initialState as registerInitialState,
  reducer as registerReducer
} from "./reducers/register";

const RegisterContext = createContext(null);

function combineReducers(reducerDict) {
  return function (state = {}, action) {
    return Object.keys(reducerDict).reduce((stateGlobal, curr) => {
      let slice = reducerDict[curr](state[curr], action);
      return { ...stateGlobal, [curr]: slice };
    }, state);
  };
}

const reducers = combineReducers({
  register: registerReducer
});

const initialState = {
  register: registerInitialState,
};

export const RegisterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <RegisterContext.Provider value={{ state, dispatch }}>
        {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContext;
