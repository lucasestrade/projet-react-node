import React, { useEffect } from 'react';
import ContentHeader from "../../components/front/ContentHeader";
import ContentPaiement from "../../components/front/ContentPaiement";
import { PaiementProvider } from "../../context/Paiement";

function Paiement({title}) {
    
    useEffect(() => {
        document.title = title;
    });
    
    return (
        <section className="section-paiement">
            <ContentHeader> 
                Paiement
            </ContentHeader>
            <PaiementProvider>
                <ContentPaiement />
            </PaiementProvider>
        </section>
    );
}

export default Paiement;
