export const initialState = {
    isPhone: false,
    isMenuOpen: false
  };
  
export const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_MENU_DISPLAY":
        return {
          ...state,
          isPhone: action.payload,
        };
      case "CHANGE_MENU_OPEN":
        return {
          ...state,
          isMenuOpen: action.payload,
        };
      case "CHANGE_PAGE_LOADED":
        return {
          ...state,
          isPageLoaded: action.payload,
        };
      default:
        return state;
    }
};
  