import { useContext } from "react";
import AppContext from "../context/App";

const useApp = () => {
  const {
    state: { app: appState },
    dispatch,
  } = useContext(AppContext);

  const actions = {
    changeMenuDisplay: function (isPhone) {
        dispatch({
          type: "CHANGE_MENU_DISPLAY",
          payload: isPhone,
        });
    },
    changeMenuOpen: function (isMenuOpen) {
      dispatch({
        type: "CHANGE_MENU_OPEN",
        payload: isMenuOpen,
      });
    },
    changePageLoaded: function (isPageLoaded) {
      dispatch({
        type: "CHANGE_PAGE_LOADED",
        payload: isPageLoaded,
      });
    }
  };

  const selectors = {
    getMenuDisplayIsPhone: () => appState.isPhone,
    getMenuOpen: () => appState.isMenuOpen,
    getPageLoaded: () => appState.isPageLoaded
  };

  return { selectors, actions };
};

export default useApp;