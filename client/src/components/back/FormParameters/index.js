import React from 'react';
import ContentInput from "../ContentInput";
import useFormParameters from "../../../hooks/useFormParameters";

function FormParameters() {

    const { selectors, actions } = useFormParameters();//

    let parameters = selectors.getFormParameters();
    function onChangeName(event) {
        actions.changeFormParamatersName(event.target.value);
    }

    function onChangeFirstname(event) {
        actions.changeFormParamatersFirstname(event.target.value);
    }

    function onChangeEmail(event) {
        actions.changeFormParamatersEmail(event.target.value);
    }

    function onChangeContact(event) {
        actions.changeFormParamatersContact(event.target.value);
    }

    function onChangeConfirmation(event) {
        actions.changeFormParamatersConfirmation(event.target.value);
    }

    function onChangeAnnulation(event) {
        actions.changeFormParamatersAnnulation(event.target.value);
    }

    function onChangePublic(event) {
        actions.changeFormParamatersPublic(event.target.value);
    }

    function onChangeSecret(event) {
        actions.changeFormParamatersSecret(event.target.value);
    }

    function onChangeRefund(event) {
        actions.changeFormParamatersRefund(event.target.value);
    }

    function submitParameters(event) {
        event.preventDefault();
    }

    return (
        <div className="form-parameters-card">
            <h2>Modification des informations</h2>
            <form onSubmit={submitParameters}>
                <ContentInput type='text' label='Nom' onChange={onChangeName} value={parameters.name} />
                <ContentInput type='text' label='Prénom' onChange={onChangeFirstname} value={parameters.firstname} />
                <ContentInput type='email' label='Email' onChange={onChangeEmail} value={parameters.email} />
                <ContentInput type='text' label='Contact' onChange={onChangeContact} value={parameters.contact} />
                <ContentInput type='text' label='Url confirmation' onChange={onChangeConfirmation} value={parameters.confirmation} />
                <ContentInput type='text' label='Url annulation' onChange={onChangeAnnulation} value={parameters.annulation} />
                <ContentInput type='text' label='Clé publique' onChange={onChangePublic} value={parameters.publicKey} />
                <ContentInput type='text' label='Clé secret' onChange={onChangeSecret} value={parameters.secret} />
                <ContentInput type='number' label='Remboursement sur les produits' onChange={onChangeRefund} value={parameters.refund} />

                <input className="button-modifier" type="submit" value="Modifier" />
            </form>
        </div>
    )
}



export default FormParameters;