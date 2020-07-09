import { useContext } from "react";
import PaiementContext from "../context/Paiement";
import { changePaiementStatus } from "../context/Paiement/actions/paiement.js";

const usePaiement = () => {
  const {
    state: { paiement: paiementState },
    dispatch,
  } = useContext(PaiementContext);

  const actions = {
    changePaiementStatus: function (status) {
        changePaiementStatus(status);
    },
  };

  const selectors = {
  };

  return { selectors, actions };
};

export default usePaiement;