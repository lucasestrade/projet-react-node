export const initialState = {
    isPhone: false
  };
  
export const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_MENU_DISPLAY":
        return {
          ...state,
          isPhone: action.payload,
        };
      default:
        return state;
    }
};
  