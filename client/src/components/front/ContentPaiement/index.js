import React from "react";
import FormPaiement from '../Form/FormPaiement';
import Cta from '../Cta/Cta';
import { useHistory, useParams } from 'react-router-dom';
import usePaiement from "../../../hooks/usePaiement";

function ContentPaiement(){

    let history = useHistory();
    let params = useParams();
    const { actions, selectors } = usePaiement();
    let transacInfos = JSON.parse(window.localStorage.getItem(params.id));

    function onClickCancelPaiement(){
        actions.changePaiementStatus(params.id, "CANCEL");
        history.push(transacInfos.cancel_url);
    }

    return(
        <div className="block-paiement flex column">
            <div className="recap-price">
            <p>Total à payer : ${transacInfos.price}</p>
            </div>
            <FormPaiement transacid={params.id} />
            <div className="cancel-paiement">
                <Cta ctaStyle="" onClick={onClickCancelPaiement} >
                    Annuler le paiement
                </Cta>
            </div>
        </div>
    );

}

export default ContentPaiement;