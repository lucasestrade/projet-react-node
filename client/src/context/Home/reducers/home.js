export const initialState = {
    isHomeLoaded: false
  };
  
export const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_HOME_LOADED":
        return {
          ...state,
          isHomeLoaded: action.payload,
        }
      default:
        return state;
    }
};
  