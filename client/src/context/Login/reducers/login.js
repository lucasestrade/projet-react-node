export const initialState = {
  admin: false
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
    case "CHANGE_CONNECTION_ADMIN":
      return {
        ...state,
        admin: action.payload,
      }
    default:
      return state;
  }
};