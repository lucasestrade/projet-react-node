import React, { createContext, useReducer } from "react";
import {
  initialState as homeInitialState,
  reducer as homeReducer
} from "./reducers/home";

const HomeContext = createContext(null);

function combineReducers(reducerDict) {
  return function (state = {}, action) {
    return Object.keys(reducerDict).reduce((stateGlobal, curr) => {
      let slice = reducerDict[curr](state[curr], action);
      return { ...stateGlobal, [curr]: slice };
    }, state);
  };
}

const reducers = combineReducers({
  home: homeReducer
});

const initialState = {
  home: homeInitialState,
};

export const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <HomeContext.Provider value={{ state, dispatch }}>
        {children}
    </HomeContext.Provider>
  );
};

export default HomeContext;
