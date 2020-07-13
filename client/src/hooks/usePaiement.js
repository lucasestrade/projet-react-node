import { useContext } from "react";
import PaiementContext from "../context/Paiement";
import { getMerchantTokenByTransac, changePaiementStatus } from "../context/Paiement/actions/paiement.js";

const usePaiement = () => {
  const {
    state: { paiement: paiementState },
    dispatch,
  } = useContext(PaiementContext);

  const actions = {
    changePaiementStatus: async function (id, status) {
        let token = await getMerchantTokenByTransac(id);
        changePaiementStatus(status, id, token);
    },
  };

  const selectors = {
  };

  return { selectors, actions };
};

export default usePaiement;