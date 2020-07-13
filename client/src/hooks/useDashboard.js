import { useContext } from "react";
import DashboardContext from "../context/Dashboard";
import { getPrices } from '../context/Dashboard/actions/dashboard';

const useDashboard = () => {
  const {
    state: { dashboard: dashboardState },
    dispatch,
  } = useContext(DashboardContext);

  const actions = {
    setPricesAvg : async() => {
      let prices = await getPrices();
      let sum = prices.reduce((previous, current) => current += previous);
      let avg = sum / prices.length;
      dispatch({
        type: "CHANGE_PRICES_AVG",
        payload: avg
      })
    }
  };

  const selectors = {
    getPricesAverage : () => {
      return dashboardState.avg
    }
  };

  return { selectors, actions };
};

export default useDashboard;