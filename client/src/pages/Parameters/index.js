import React, { useEffect } from 'react';
import ContentHeader from '../../components/front/ContentHeader';
import { ParametersProvider } from '../../context/Parameters';
import { SidebarProvider } from '../../context/SideBar';
import ContentParameters from '../../components/back/ContentParameters';
import ContentSidebar from '../../components/back/ContentSidebar';


function Parameters({ title }) {

    useEffect(() => {
        document.title = title;
    });

    return (
        <section className="section-dashboad">
            <ContentHeader>
                Parameters
            </ContentHeader>
            <div className="flex">
                <SidebarProvider>
                    <ContentSidebar />
                </SidebarProvider>
                <ParametersProvider>
                    <ContentParameters />
                </ParametersProvider>
            </div>
        </section>
    );
}

export default Parameters;
