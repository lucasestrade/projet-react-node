import React, { useEffect } from 'react';
import ContentHeader from "../../components/front/ContentHeader";
import ContentPaiement from "../../components/front/ContentPaiement";

function Paiement({title}) {
    
    useEffect(() => {
        document.title = title;
    });
    
    return (
        <section className="section-paiement">
            <ContentHeader> 
                Paiement
            </ContentHeader>
            <ContentPaiement />
        </section>
    );
}

export default Paiement;
