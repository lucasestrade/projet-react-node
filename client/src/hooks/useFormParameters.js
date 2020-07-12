import { useContext } from "react";
import ParametersContext from "../context/Parameters";

const useFormParameters = () => {
    const {
        state: { parameters: parametersState },
        dispatch,
    } = useContext(ParametersContext);

    const actions = {
        changeFormParamatersName: function (name) {
            dispatch({
                type: "CHANGE_FORM_NAME",
                payload: name,
            });
        },
        changeFormParamatersFirstname: function (firstname) {
            dispatch({
                type: "CHANGE_FORM_FIRSTNAME",
                payload: firstname,
            });
        },
        changeFormParamatersEmail: function (email) {
            dispatch({
                type: "CHANGE_FORM_EMAIL",
                payload: email,
            });
        },
        changeFormParamatersContact: function (contact) {
            dispatch({
                type: "CHANGE_FORM_CONTACT",
                payload: contact,
            });
        },
        changeFormParamatersConfirmation: function (confirmation) {
            dispatch({
                type: "CHANGE_FORM_CONFIRMATION",
                payload: confirmation,
            });
        },
        changeFormParamatersAnnulation: function (annulation) {
            dispatch({
                type: "CHANGE_FORM_ANNULATION",
                payload: annulation,
            });
        },
        changeFormParamatersRefund: function (refund) {
            dispatch({
                type: "CHANGE_FORM_REFUND",
                payload: refund,
            }); 
        }
    }

    const selectors = {
        getFormParameters: () => parametersState.userInfo,
        getFormParamatersName: () => parametersState.name,
        getFormParamatersFirstname: () => parametersState.firstname,
        getFormParamatersEmail: () => parametersState.email,
        getFormParamatersContact: () => parametersState.contact,
        getFormParamatersConfirmation: () => parametersState.confirmation,
        getFormParamatersAnnulation: () => parametersState.annulation,
        getFormParamatersRefund: () => parametersState.refund
    };

    return { selectors, actions };
};

export default useFormParameters;