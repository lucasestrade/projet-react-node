import { useContext } from "react";
import FormRegisterContext from "../context/FormRegister";

const useFormRegister = () => {
  const {
    state: { formRegister: formRegisterState },
    dispatch,
  } = useContext(FormRegisterContext);

  const actions = {
    changeFormRegisterName: function (name) {
      dispatch({
        type: "CHANGE_FORM_NAME",
        payload: name,
      });
    },
    changeFormRegisterFirstname: function (firstname) {
      dispatch({
        type: "CHANGE_FORM_FIRSTNAME",
        payload: firstname,
      });
    },
    changeFormRegisterEmail: function (email) {
      dispatch({
        type: "CHANGE_FORM_EMAIL",
        payload: email,
      });
    },
    changeFormRegisterPassword: function (password) {
      dispatch({
        type: "CHANGE_FORM_PASSWORD",
        payload: password,
      });
    },
    changeFormRegisterConfirme: function (confirme) {
      dispatch({
        type: "CHANGE_FORM_CONFIRME",
        payload: confirme,
      });
    }
  };

  const selectors = {
    getFormRegisterName: () => formRegisterState.name,
    getFormRegisterFirstname: () => formRegisterState.firstname,
    getFormRegisterEmail: () => formRegisterState.email,
    getFormRegisterPassword: () => formRegisterState.password,
    getFormRegisterConfirme: () => formRegisterState.confirme
  };

  return { selectors, actions };
};

export default useFormRegister;