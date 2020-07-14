import React, { createContext, useReducer } from "react";
import {
  initialState as parametersInitialState,
  reducer as parametersReducer
} from "./reducers/parameters";

const ParametersContext = createContext(null);

function combineReducers(reducerDict) {
  return function (state = {}, action) {
    return Object.keys(reducerDict).reduce((stateGlobal, curr) => {
      let slice = reducerDict[curr](state[curr], action);
      return { ...stateGlobal, [curr]: slice };
    }, state);
  };
}

const reducers = combineReducers({
    parameters: parametersReducer
});

const initialState = {
    parameters: parametersInitialState,
};

export const ParametersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <ParametersContext.Provider value={{ state, dispatch }}>
        {children}
    </ParametersContext.Provider>
  );
};

export default ParametersContext;
