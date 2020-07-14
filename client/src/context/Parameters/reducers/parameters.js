export const initialState = {
  userInfo: {},
  userCredential: [{}]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FORM_NAME":
      return {
        ...state,
        userInfo : {
          ...state.userInfo,
          name: action.payload
        }
      };

    case "CHANGE_FORM_FIRSTNAME":
      return {
        ...state,
        userInfo : {
          ...state.userInfo,
          firstname: action.payload
        }
      };

    case "CHANGE_FORM_EMAIL":
      return {
        ...state,
        userInfo : {
          ...state.userInfo,
          email: action.payload
        }
      };

    case "CHANGE_FORM_CONTACT":
      return {
        ...state,
        userInfo : {
          ...state.userInfo,
          contact: action.payload
        }
      };

    case "CHANGE_FORM_CONFIRMATION":
      return {
        ...state,
        userInfo : {
          ...state.userInfo,
          url_validation: action.payload
        }
      };

    case "CHANGE_FORM_ANNULATION":
      return {
        ...state,
        userInfo : {
          ...state.userInfo,
          url_echec: action.payload
        }
      };

    case "CHANGE_FORM_PUBLIC":
      return {
        ...state,
        userCredential : [{
          ...state.userCredential[0],
          client_token: action.payload
        }]
      };

    case "CHANGE_FORM_SECRET":
      return {
        ...state,
        userCredential : [{
          ...state.userCredential[0],
          client_secret: action.payload
        }]
      };

    case "CHANGE_FORM_REFUND":
      return {
        ...state,
        userInfo : {
          ...state.userInfo,
          repayment_currency: action.payload
        }
      };
    case "CHANGE_FORM_KBIS":
      return {
        ...state,
        userInfo : {
          ...state.userInfo,
          kbis: action.payload
        }
      };
      
    case "SET_PARAMETERS_INFO":
      return {
        ...state,
        userInfo: action.payload1,
        userCredential: action.payload2
      };

    case "SET_CREDENTIAL":
      return {
        ...state,
        userCredential: action.payload,
      };

    default:
      return state;
  }
};