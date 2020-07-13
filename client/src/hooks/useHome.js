import { useContext } from "react";
import HomeContext from "../context/Home";
import { sendSeller1Basket, sendSeller2Basket } from "../context/Home/actions/home.js";

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
    },
    addPriceSeller1: function (price) {
      dispatch({
        type: "ADD_PRICE_SELLER_1",
        payload: price,
      });
    },
    addPriceSeller2: function (price) {
      dispatch({
        type: "ADD_PRICE_SELLER_2",
        payload: price,
      });
    },
    removePriceSeller1: function (price) {
      dispatch({
        type: "REMOVE_PRICE_SELLER_1",
        payload: price,
      });
    },
    removePriceSeller2: function (price) {
      dispatch({
        type: "REMOVE_PRICE_SELLER_2",
        payload: price,
      });
    },
    sendSeller1Basket: function (price){
      sendSeller1Basket(price);
    },
    sendSeller2Basket: function (price){
      sendSeller2Basket(price);
    }
  };

  const selectors = {
    getHomeLoaded: () => homeState.isHomeLoaded,
    getProducts1: () => homeState.products.seller1,
    getProducts2: () => homeState.products.seller2,
    getPriceSeller1: () => homeState.priceSeller1,
    getPriceSeller2: () => homeState.priceSeller2
  };

  return { selectors, actions };
};

export default useHome;