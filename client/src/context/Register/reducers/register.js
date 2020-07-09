export const initialState = {
 
  };
  
export const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_FORM_DISPLAY":
        return {
          ...state,
          infoForm: action.payload,
        };
      default:
        return state;
    }
};