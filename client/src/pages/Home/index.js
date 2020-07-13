import React, { useEffect } from 'react';
import ContentHeader from "../../components/front/ContentHeader";
import { HomeProvider } from "../../context/Home";
import ContentHome from "../../components/front/ContentHome";

function Home({title}) {
    
    useEffect(() => {
        document.title = title;
    });
    
    return (
        <section className="section-home">
            <ContentHeader> 
                Articles disponibles
            </ContentHeader>
            <HomeProvider>
                <ContentHome />
            </HomeProvider>
        </section>
    );
}

export default Home;
