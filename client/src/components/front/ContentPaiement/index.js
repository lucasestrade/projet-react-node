import React from "react";
import FormPaiement from '../Form/FormPaiement';
import Cta from '../Cta/Cta';
import { useHistory } from 'react-router-dom';

function ContentPaiement(){

    let history = useHistory();

    function onClickCancelPaiement(){
        history.push('/');
    }

    return(
        <div className="block-paiement flex column">
            <div className="recap-price">
                <p>Total à payer : $15</p>
            </div>
            <FormPaiement />
            <div className="cancel-paiement">
                <Cta ctaStyle="" onClick={onClickCancelPaiement} >
                    Annuler le paiement
                </Cta>
            </div>
        </div>
    );

}

export default ContentPaiement;