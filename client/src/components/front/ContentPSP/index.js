import React from "react";

function ContentPSP(){

    redirection();

    return(
        <div className="block-psp">
            Validation du paiement par la banque en cours. Vous serez automatiquement redirigé vers le site du marchand.
        </div>
    );

}

function redirection(){
    setTimeout(function(){
        window.location = "/";
    }, 5000);
}

export default ContentPSP;