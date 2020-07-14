import { useContext } from "react";
import DashboardContext from "../context/Dashboard";
import { getPrices, getTransacPerDate } from '../context/Dashboard/actions/dashboard';

const useDashboard = () => {
  const {
    state: { dashboard: dashboardState },
    dispatch,
  } = useContext(DashboardContext);

  const actions = {
    setDashboardDatas : () => {
      getPrices(function(prices){
        getTransacPerDate(function(transacPerDate){
          let avg = 0;
          if(prices.length !== 0){
            let sum = prices.reduce((previous, current) => current += previous);
            avg = sum / prices.length;
          }
          dispatch({
            type: "CHANGE_DATAS",
            payload1: avg,
            payload2: transacPerDate
          })
        });
      });
    }
  };

  const selectors = {
    getPricesAverage : () => {
      return dashboardState.avg
    },
    getTransacPerDate : () => {
      return dashboardState.transacPerDate
    }
  };

  return { selectors, actions };
};

export default useDashboard;