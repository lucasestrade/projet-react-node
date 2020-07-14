import { useContext } from "react";
import FormRegisterContext from "../context/FormRegister";
import { submit, postCredentials } from "../context/FormRegister/actions/formRegister";

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


    changeFormRegisterContact: function (contact) {
      dispatch({
        type: "CHANGE_FORM_CONTACT",
        payload: contact,
      });
    },
    changeFormRegisterConfirmation: function (confirmation) {
      dispatch({
        type: "CHANGE_FORM_CONFIRMATION",
        payload: confirmation,
      });
    },
    changeFormRegisterAnnulation: function (annulation) {
      dispatch({
        type: "CHANGE_FORM_ANNULATION",
        payload: annulation,
      });
    },
    changeFormRegisterRefund: function (refund) {
      dispatch({
        type: "CHANGE_FORM_REFUND",
        payload: refund,
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
    },
    
    submit: function () {
      submit(formRegisterState,
        function (name) {
          postCredentials(name);
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