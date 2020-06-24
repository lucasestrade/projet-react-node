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
    }
  };

  const selectors = {
    getMenuDisplayIsPhone: () => appState.isPhone
  };

  return { selectors, actions };
};

export default useApp;