import React from "react";
import FormPaiement from '../Form/FormPaiement';
import Cta from '../Cta/Cta';
import { useHistory, useParams } from 'react-router-dom';

function ContentPaiement(){

    let history = useHistory();
    let params = useParams();
    let transacInfos = JSON.parse(window.localStorage.getItem(params.id));

    function onClickCancelPaiement(){
        history.push(transacInfos.cancel_url);
    }

    return(
        <div className="block-paiement flex column">
            <div className="recap-price">
            <p>Total à payer : ${transacInfos.price}</p>
            </div>
            <FormPaiement redirect={transacInfos.validation_url} />
            <div className="cancel-paiement">
                <Cta ctaStyle="" onClick={onClickCancelPaiement} >
                    Annuler le paiement
                </Cta>
            </div>
        </div>
    );

}

export default ContentPaiement;