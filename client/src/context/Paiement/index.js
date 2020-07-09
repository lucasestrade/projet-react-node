import React, { createContext, useReducer } from "react";
import {
  initialState as paiementInitialState,
  reducer as paiementReducer
} from "./reducers/paiement";

const PaiementContext = createContext(null);

function combineReducers(reducerDict) {
  return function (state = {}, action) {
    return Object.keys(reducerDict).reduce((stateGlobal, curr) => {
      let slice = reducerDict[curr](state[curr], action);
      return { ...stateGlobal, [curr]: slice };
    }, state);
  };
}

const reducers = combineReducers({
  paiement: paiementReducer
});

const initialState = {
  paiement: paiementInitialState,
};

export const PaiementProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <PaiementContext.Provider value={{ state, dispatch }}>
        {children}
    </PaiementContext.Provider>
  );
};

export default PaiementContext;
