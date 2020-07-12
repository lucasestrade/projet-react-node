import React from "react";
import ContentInput from "../ContentInput";
import useLogin from "../../../hooks/useLogin";

function LoginForm() {

    const { selectors, actions } = useLogin();

    function submitLogin(event) {
        event.preventDefault();
    }

    return (
        <div className="login-card">
            <form onSubmit={submitLogin}>
                <ContentInput type='text' label='Email' />
                <ContentInput type='text' label='Mot de passe' />
                <input className="button-connexion" type="submit" value="Connexion" />
            </form>
        </div>
    );
}
export default LoginForm;