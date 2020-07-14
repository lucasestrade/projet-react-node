import React, { createContext, useReducer } from "react";
import {
  initialState as sidebarInitialState,
  reducer as sidebarReducer
} from "./reducers/sidebar";

const SidebarContext = createContext(null);

function combineReducers(reducerDict) {
  return function (state = {}, action) {
    return Object.keys(reducerDict).reduce((stateGlobal, curr) => {
      let slice = reducerDict[curr](state[curr], action);
      return { ...stateGlobal, [curr]: slice };
    }, state);
  };
}

const reducers = combineReducers({
    sidebar: sidebarReducer
});

const initialState = {
    sidebar: sidebarInitialState,
};

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <SidebarContext.Provider value={{ state, dispatch }}>
        {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;