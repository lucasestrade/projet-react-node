import { useContext } from "react";
import LoginContext from "../context/Login";
import { login } from "../context/Login/actions/login.js";

const useLogin = () => {
  const {
    state: { login: loginState },
    dispatch,
  } = useContext(LoginContext);

  const actions = {
    login: async function (id, status) {
      login(status, id);
    },
  };

  const selectors = {

  };

  return { selectors, actions };
};

export default useLogin;