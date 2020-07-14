import { useContext } from "react";
import ParametersContext from "../context/Parameters";
import { getParametersInfo } from "../context/Parameters/actions/parameters.js";

import { sendParameters } from "../context/Parameters/actions/parameters.js";

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
        changeFormParamatersPublic: function (publicKey) {
            dispatch({
                type: "CHANGE_FORM_PUBLIC",
                payload: publicKey,
            });
        },
        changeFormParamatersSecret: function (secret) {
            dispatch({
                type: "CHANGE_FORM_SECRET",
                payload: secret,
            });
        },
        changeFormParamatersRefund: function (refund) {
            dispatch({
                type: "CHANGE_FORM_REFUND",
                payload: refund,
            }); 
        },
        changeFormParamatersKabis: function (kbis) {
            dispatch({
                type: "CHANGE_FORM_KBIS",
                payload: kbis,
            }); 
        },
        getParametersInfo: async function () {
            let parametersInfo = await getParametersInfo();
            let userCredential = await getParametersInfo();
            dispatch({
                type: "SET_PARAMETERS_INFO",
                payload1: parametersInfo,
                payload2: userCredential
            });
        },
/*         getCredential: async function () {
            let userCredential = await getParametersInfo();
            dispatch({
                type: "SET_CREDENTIAL",
                payload: userCredential,
            });
        } */
        sendParameters: async function () {
            sendParameters(
                parametersState.name,
                parametersState.firstname,
                parametersState.confirmation,
                parametersState.annulation,
                parametersState.kbis,
                parametersState.email,
                parametersState.contact,
                parametersState.refund
                );
        }
    }

    const selectors = {
        getFormParameters: () => parametersState.userInfo,
        getFormCredential: () => parametersState.userCredential,
        getFormParamatersName: () => parametersState.name,
        getFormParamatersFirstname: () => parametersState.firstname,
        getFormParamatersEmail: () => parametersState.email,
        getFormParamatersContact: () => parametersState.contact,
        getFormParamatersConfirmation: () => parametersState.confirmation,
        getFormParamatersAnnulation: () => parametersState.annulation,
        getFormParametersPublic: () => parametersState.public,
        getFormParametersSecret: () => parametersState.secret,
        getFormParamatersRefund: () => parametersState.refund,
        getFormParamatersKabis: () => parametersState.kbis
    };

    return { selectors, actions };
};

export default useFormParameters;