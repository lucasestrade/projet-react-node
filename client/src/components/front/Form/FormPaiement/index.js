import React from 'react';
import Submit from '../../Cta/Submit';
import Input from '../../Input';
import { useHistory } from 'react-router-dom';

function FormPaiement({redirect}){

    let history = useHistory();

    function onClickSubmitPaiement(event){
        event.preventDefault();
        history.push(redirect);
    }

    return(
        <form className="form-paiement flex column">
            <h2>Informations de livraison</h2>
            <Input type="text" label="Adresse de livraison" />
            <Input type="number" label="Code postal" />
            <Input type="text" label="Ville" />
            <h2>Informations de paiement</h2>
            <Input type="text" label="Nom du titulaire de la carte" />
            <Input type="number" label="Numéro de carte" />
            <Input type="date" label="Date d'expiration" />
            <Input type="number" label="CVV" />
            <Submit onClick={onClickSubmitPaiement} >
                Payer
            </Submit>
        </form>
    );

}

export default FormPaiement