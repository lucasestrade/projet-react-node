export const initialState = {

};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FORM_EMAIL":
      return {
        ...state,
        email: action.payload,
      }
    
      case "CHANGE_FORM_PASSWORD":
      return {
        ...state,
        password: action.payload,
      }
    default:
      return state;
  }
};