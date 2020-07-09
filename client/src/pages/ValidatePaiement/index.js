import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ValidatePaiement({title}) {
    
    let params = useParams();

    useEffect(() => {
        document.title = title;
    });
    console.log(params.id);
    return (
        <section className="section-validate-paiement">
           aaaaaa
        </section>
    );
}

export default ValidatePaiement;
