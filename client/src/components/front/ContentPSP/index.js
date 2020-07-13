import React from "react";

function ContentPSP({transacid}){

    redirection(transacid);

    return(
        <div className="block-psp">
            Validation du paiement par la banque en cours. Vous serez automatiquement redirigé vers le site du marchand.
        </div>
    );

}

function redirection(transacid){
    setTimeout(function(){
        window.location = JSON.parse(window.localStorage.getItem(transacid)).validation_url;
    }, 5000);
}

export default ContentPSP;