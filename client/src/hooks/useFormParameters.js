import { useContext } from "react";
import ParametersContext from "../context/Parameters";
import { getParametersInfo, getCredential, sendParameters, sendCredentials } from "../context/Parameters/actions/parameters.js";

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
            getParametersInfo(function(parametersInfo){
                getCredential(function(userCredential){
                    dispatch({
                        type: "SET_PARAMETERS_INFO",
                        payload1: parametersInfo,
                        payload2: userCredential
                    });
                });
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
                parametersState.userInfo.name,
                parametersState.userInfo.firstname,
                parametersState.userInfo.url_validation,
                parametersState.userInfo.url_echec,
                parametersState.userInfo.kbis,
                parametersState.userInfo.email,
                parametersState.userInfo.contact,
                parametersState.userInfo.repayment_currency,
            );
            sendCredentials(
                parametersState.userCredential[0].client_token,
                parametersState.userCredential[0].client_secret
            )
        }
    }

    const selectors = {
        getFormParameters: () => parametersState.userInfo,
        getFormCredential: () => parametersState.userCredential,
        getFormParamatersName: () => parametersState.userInfo.name,
        getFormParamatersFirstname: () => parametersState.userInfo.firstname,
        getFormParamatersEmail: () => parametersState.userInfo.email,
        getFormParamatersContact: () => parametersState.userInfo.contact,
        getFormParamatersConfirmation: () => parametersState.userInfo.url_validation,
        getFormParamatersAnnulation: () => parametersState.userInfo.url_echec,
        getFormParametersPublic: () => parametersState.userCredential[0].client_token,
        getFormParametersSecret: () => parametersState.userCredential[0].client_secret,
        getFormParamatersRefund: () => parametersState.userInfo.repayment_currency,
        getFormParamatersKabis: () => parametersState.userInfo.kbis
    };

    return { selectors, actions };
};

export default useFormParameters;