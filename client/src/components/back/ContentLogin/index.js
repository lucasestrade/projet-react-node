import React, { useEffect } from "react";
import useLogin from "../../../hooks/useLogin";
import LoginForm from "../LoginForm";

function ContentLogin() {

    const { selectors, actions } = useLogin();
    

    useEffect(() => {
    })

    return(
        <div className="login-card-content">
            <LoginForm />
        </div>
    )

}


export default ContentLogin;