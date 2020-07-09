import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CancelPaiement({title}) {
    
    let params = useParams();

    useEffect(() => {
        document.title = title;
    });
    console.log(params.id);
    return (
        <section className="section-cancel-paiement">
           aaaaaa
        </section>
    );
}

export default CancelPaiement;
