import React, { createContext, useReducer } from "react";
import {
  initialState as formRegisterInitialState,
  reducer as formRegisterReducer
} from "./reducers/formRegister";

const FormRegisterContext = createContext(null);

function combineReducers(reducerDict) {
  return function (state = {}, action) {
    return Object.keys(reducerDict).reduce((stateGlobal, curr) => {
      let slice = reducerDict[curr](state[curr], action);
      return { ...stateGlobal, [curr]: slice };
    }, state);
  };
}

const reducers = combineReducers({
  formRegister: formRegisterReducer
});

const initialState = {
  formRegister: formRegisterInitialState,
};

export const FormRegisterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <FormRegisterContext.Provider value={{ state, dispatch }}>
        {children}
    </FormRegisterContext.Provider>
  );
};

export default FormRegisterContext;
