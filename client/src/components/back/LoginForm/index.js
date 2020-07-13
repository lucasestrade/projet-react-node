import React from "react";
import ContentInput from "../ContentInput";
import useLogin from "../../../hooks/useLogin";

function LoginForm() {

    const { selectors, actions } = useLogin();

    function onChangeEmail(event) {
        actions.changeFormLoginEmail(event.target.value);
    }
    function onChangePassword(event) {
        actions.changeFormLoginPassword(event.target.value);
    }

    function submitLogin(event) {
        event.preventDefault();
        actions.login()
    }

    return (
        <div className="login-card">
            <form onSubmit={submitLogin}>
                <ContentInput type='text' label='Email' onChange={onChangeEmail} />
                <ContentInput type='password' label='Mot de passe' onChange={onChangePassword} />
                <input className="button-connexion" type="submit" value="Connexion" />
            </form>
        </div>
    );
}
export default LoginForm;