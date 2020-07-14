import React, { createContext, useReducer } from "react";
import {
  initialState as listMerchantInitialState,
  reducer as listMerchantReducer
} from "./reducers/listMerchant";

const ListMerchantContext = createContext(null);

function combineReducers(reducerDict) {
  return function (state = {}, action) {
    return Object.keys(reducerDict).reduce((stateGlobal, curr) => {
      let slice = reducerDict[curr](state[curr], action);
      return { ...stateGlobal, [curr]: slice };
    }, state);
  };
}

const reducers = combineReducers({
  listMerchant: listMerchantReducer
});

const initialState = {
  listMerchant: listMerchantInitialState,
};

export const ListMerchantProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <ListMerchantContext.Provider value={{ state, dispatch }}>
        {children}
    </ListMerchantContext.Provider>
  );
};

export default ListMerchantContext;
