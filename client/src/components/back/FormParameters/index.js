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

    function onChangeRefund(event) {
        actions.changeFormParamatersRefund(event.target.value);
    }

    function submitParameters(event) {
        event.preventDefault();
    }

    return (
        <div className="form-parameters-card">
            <form onSubmit={submitParameters}>
                <ContentInput type='text' label='Nom' onChange={onChangeName} placeholder={parameters.name} />
                <ContentInput type='text' label='Prénom' onChange={onChangeFirstname} placeholder={parameters.firstname} />
                <ContentInput type='email' label='Email' onChange={onChangeEmail} placeholder={parameters.email} />

                <ContentInput type='text' label='Contact' onChange={onChangeContact} placeholder={parameters.contact} />
                <ContentInput type='text' label='Url confirmation' onChange={onChangeConfirmation} placeholder={parameters.confirmation} />
                <ContentInput type='text' label='Url annulation' onChange={onChangeAnnulation} placeholder={parameters.annulation} />
                <ContentInput type='number' label='Remboursement sur les produits' onChange={onChangeRefund} placeholder={parameters.refund} />

                <input type="submit" value="Modifier" />
            </form>
        </div>
    )
}



export default FormParameters;