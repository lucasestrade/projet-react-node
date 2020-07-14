import React, { createContext, useReducer } from "react";
import {
  initialState as historyInitialState,
  reducer as historyReducer
} from "./reducers/history";

const HistoryContext = createContext(null);

function combineReducers(reducerDict) {
  return function (state = {}, action) {
    return Object.keys(reducerDict).reduce((stateGlobal, curr) => {
      let slice = reducerDict[curr](state[curr], action);
      return { ...stateGlobal, [curr]: slice };
    }, state);
  };
}

const reducers = combineReducers({
    history: historyReducer
});

const initialState = {
    history: historyInitialState,
};

export const HistoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <HistoryContext.Provider value={{ state, dispatch }}>
        {children}
    </HistoryContext.Provider>
  );
};

export default HistoryContext;
