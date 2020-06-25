import { useContext } from "react";
import HomeContext from "../context/Home";

const useHome = () => {
  const {
    state: { home: homeState },
    dispatch,
  } = useContext(HomeContext);

  const actions = {
    changeHomeLoaded: function (isHomeLoaded) {
        dispatch({
          type: "CHANGE_HOME_LOADED",
          payload: isHomeLoaded,
        });
    }
  };

  const selectors = {
    getHomeLoaded: () => homeState.isHomeLoaded
  };

  return { selectors, actions };
};

export default useHome;