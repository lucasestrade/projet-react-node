import React, { useEffect } from "react";
import useLogin from "../../../hooks/useLogin";
import LoginForm from "../LoginForm";

function ContentLogin() {

    const { selectors, actions } = useLogin();
    

    useEffect(() => {
    })

    function onChangeCheckbox(event){
        let checked = event.target.checked;
        actions.changeConnectionAdmin(checked);
    }

    return(
        <div className="login-card-content">
            <LoginForm />
            <label htmlFor="checkbox">Connexion admin</label>
            <input id="checkbox" onChange={onChangeCheckbox} type="checkbox" />
        </div>
    )

}


export default ContentLogin;