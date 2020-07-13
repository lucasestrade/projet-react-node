import React, { useEffect } from 'react';

function ValidatePaiement({title}) {

    redirection();

    useEffect(() => {
        document.title = title;
    });

    return (
        <section className="section-validate-paiement">
           <p>Merci pour votre achat. Vous aller être redirigé vers le site marchand.</p>
           <p>Si vous n'êtes pas automatiquement redirigé cliquez sur le lien suivant : <a href="/">Retour vers le site</a></p>
        </section>
    );
}

function redirection(){
    setTimeout(function(){
        window.location = "/";
    }, 5000)
}

export default ValidatePaiement;
