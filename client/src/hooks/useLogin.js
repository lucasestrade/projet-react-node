import { useContext } from "react";
import LoginContext from "../context/Login";
import { login } from "../context/Login/actions/login.js";

const useLogin = () => {
  const {
    state: { login: loginState },
    dispatch,
  } = useContext(LoginContext);

  const actions = {
    changeFormLoginEmail: function (email) {
      dispatch({
        type: "CHANGE_FORM_EMAIL",
        payload: email,
      });
    },
    changeFormLoginPassword: function (password) {
      dispatch({
        type: "CHANGE_FORM_PASSWORD",
        payload: password,
      });
    },
    login: async function () {
      login(loginState.email, loginState.password, loginState.admin);
    },
    changeConnectionAdmin: function(isAdmin){
      dispatch({
        type: "CHANGE_CONNECTION_ADMIN",
        payload: isAdmin,
      });
    }
  };

  const selectors = {
    getFormLoginEmail: () => loginState.email,
    getFormLoginPassword: () => loginState.password
  };

  return { selectors, actions };
};

export default useLogin;