import React, { useEffect } from 'react';
import ContentPSP from "../../components/front/ContentPSP";

function PSP({title}) {
    
    useEffect(() => {
        document.title = title;
    });
    
    return (
        <section className="section-psp">
            <ContentPSP />
        </section>
    );
}

export default PSP;
