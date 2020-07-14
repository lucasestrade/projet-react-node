export const initialState = {

  history: [

  ]

};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_HISTORY_LIST":
      return {
        ...state,
        history: action.payload,
      };

    case "CHANGE_FORM_CONTACT":
      return {
        ...state,
        history: {
          ...state.history,
          contact: action.payload
        }
      };

    case "CHANGE_FORM_CONFIRMATION":
      return {
        ...state,
        history: {
          ...state.history,
          url_validation: action.payload
        }
      };

    case "CHANGE_FORM_ANNULATION":
      return {
        ...state,
        history: {
          ...state.history,
          url_echec: action.payload
        }
      };

    case "CHANGE_FORM_REFUND":
      return {
        ...state,
        history: {
          ...state.history,
          repayment_currency: action.payload
        }
      };
    default:
      return state;
  }
};