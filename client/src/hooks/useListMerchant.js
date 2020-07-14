import { useContext } from "react";
import ListMerchantContext from "../context/ListMerchant";
import { getMerchants, verifyMerchant } from "../context/ListMerchant/actions/listMerchant";

const useListMerchant = () => {
  const {
    state: { listMerchant: listMerchantState },
    dispatch,
  } = useContext(ListMerchantContext);

  const actions = {
    getMerchants: () => {
      getMerchants(function(merchants){
        dispatch({
          type: "GET_MERCHANTS",
          payload: merchants
        })
      })
    },
    verifyMerchant: (id) => {
      verifyMerchant(id);
    }
  };

  const selectors = {
    getListMerchant: () => listMerchantState.merchants
  };

  return { selectors, actions };
};

export default useListMerchant;