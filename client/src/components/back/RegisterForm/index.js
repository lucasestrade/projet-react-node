import React from "react";
import ContentInput from "../ContentInput";
import useFormRegister from "../../../hooks/useFormRegister";

function RegisterForm() {

    const { selectors, actions } = useFormRegister();

    function onChangeName(event) {
        actions.changeFormRegisterName(event.target.value);
    }

    function onChangeFirstname(event) {
        actions.changeFormRegisterFirstname(event.target.value);
    }

    function onChangeEmail(event) {
        actions.changeFormRegisterEmail(event.target.value);
    }

    function onChangePassword(event) {
        actions.changeFormRegisterPassword(event.target.value);
    }

    function onChangeConfirme(event) {
        actions.changeFormRegisterConfirme(event.target.value);
    }

    function onChangeContact(event) {
       actions.changeFormRegisterContact(event.target.value);
    }

    function onChangeConfirmation(event) {
        actions.changeFormRegisterConfirmation(event.target.value);
    }

    function onChangeAnnulation(event) {
        actions.changeFormRegisterAnnulation(event.target.value);
    }

    function onChangeRefund(event) {
        actions.changeFormRegisterRefund(event.target.value);
    }


    function submitRegister(event) {
        event.preventDefault();
        verifyPassword();
    }
    

    function verifyPassword() {
        let password = selectors.getFormRegisterPassword();
        let confirme = selectors.getFormRegisterConfirme();
        if (password === confirme) {
            actions.submit();
        }
    }

    return (
        <form onSubmit={submitRegister}>
            <ContentInput type='text' label='Nom' onChange={onChangeName} />
            <ContentInput type='text' label='Prénom' onChange={onChangeFirstname} />
            <ContentInput type='email' label='Email' onChange={onChangeEmail} />
            <ContentInput type='text' label='Contact' onChange={onChangeContact} />
            <ContentInput type='text' label='Url confirmation' onChange={onChangeConfirmation} />
            <ContentInput type='text' label='Url annulation' onChange={onChangeAnnulation} />
            <ContentInput type='number' label='Remboursement sur les produits' onChange={onChangeRefund} />
            <ContentInput type='password' label='Mot de passe' onChange={onChangePassword} />
            <ContentInput type='password' label='Confirmation' onChange={onChangeConfirme} />
            <input type="submit" value="S'inscrire" />
        </form>
    );
}

export default RegisterForm;