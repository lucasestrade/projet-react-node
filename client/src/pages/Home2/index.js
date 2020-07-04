import React, { useEffect } from 'react';
import ContentHeader from "../../components/front/ContentHeader";
import { HomeProvider } from "../../context/Home";
import ContentHome2 from "../../components/front/ContentHome2";

function Home2({title}) {
    
    useEffect(() => {
        document.title = title;
    });
    
    return (
        <section className="section-home">
            <ContentHeader> 
                Articles disponibles
            </ContentHeader>
            <HomeProvider>
                <ContentHome2 />
            </HomeProvider>
        </section>
    );
}

export default Home2;
