import React, { useEffect } from "react";
import RegisterForm from "../RegisterForm";
import { FormRegisterProvider } from "../../../context/FormRegister";

function ContentRegister() {

    useEffect(() => {
    })

    return (
        <div>
            <FormRegisterProvider>
                <RegisterForm />
            </FormRegisterProvider>
        </div>
    )

}


export default ContentRegister;