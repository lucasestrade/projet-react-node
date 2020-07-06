import React from "react";
import FormPaiement from '../Form/FormPaiement';
import Cta from '../Cta/Cta';

function ContentPaiement(){

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

function onClickCancelPaiement(event){
    event.preventDefault();
    alert("cancel");
}

export default ContentPaiement;