import React, { useEffect } from 'react';
import ContentPSP from "../../components/front/ContentPSP";
import { useParams } from 'react-router-dom';

function PSP({title}) {
    
    let params = useParams();

    useEffect(() => {
        document.title = title;
    });
    
    return (
        <section className="section-psp">
            <ContentPSP transacid={params.id}/>
        </section>
    );
}

export default PSP;
