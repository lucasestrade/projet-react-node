import React, { createContext, useReducer } from "react";
import {
  initialState as dashboardInitialState,
  reducer as dashboardReducer
} from "./reducers/dashboard";

const DashboardContext = createContext(null);

function combineReducers(reducerDict) {
  return function (state = {}, action) {
    return Object.keys(reducerDict).reduce((stateGlobal, curr) => {
      let slice = reducerDict[curr](state[curr], action);
      return { ...stateGlobal, [curr]: slice };
    }, state);
  };
}

const reducers = combineReducers({
  dashboard: dashboardReducer
});

const initialState = {
  dashboard: dashboardInitialState,
};

export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
        {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
