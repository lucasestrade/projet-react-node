import React, { useEffect } from 'react';

function CancelPaiement({title}) {
    
    redirection();

    useEffect(() => {
        document.title = title;
    });

    return (
        <section className="section-cancel-paiement">
           <p>Votre paiement a été annulé. Vous allez être redirigé automatiquement vers le site marchand.</p>
           <p>Si vous n'êtes pas automatiquement redirigé cliquez sur le lien suivant : <a href="/">Retour vers le site marchand</a></p>
        </section>
    );
}

function redirection(){
    setTimeout(function(){
        window.location = "/";
    }, 5000)
}

export default CancelPaiement;
