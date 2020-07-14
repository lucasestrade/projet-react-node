export const initialState = {
  name: "",
  firstname: "",
  email: "",
  password: "",
  confirme: ""
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FORM_NAME":
      return {
        ...state,
        name: action.payload,
      };

    case "CHANGE_FORM_FIRSTNAME":
      return {
        ...state,
        firstname: action.payload,
      };

    case "CHANGE_FORM_EMAIL":
      return {
        ...state,
        email: action.payload,
      };

    case "CHANGE_FORM_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };

    case "CHANGE_FORM_CONFIRME":
      return {
        ...state,
        confirme: action.payload,
      };

    case "CHANGE_FORM_CONTACT":
      return {
        ...state,
        contact: action.payload
      };

    case "CHANGE_FORM_CONFIRMATION":
      return {
        ...state,
        url_validation: action.payload
      };

    case "CHANGE_FORM_ANNULATION":
      return {
        ...state,
          url_echec: action.payload
      };

    case "CHANGE_FORM_REFUND":
      return {
        ...state,
          repayment_currency: action.payload
      };

    default:
      return state;
  }
};
