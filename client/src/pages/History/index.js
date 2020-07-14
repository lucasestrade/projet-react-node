import React, { useEffect } from 'react';
import ContentHeader from '../../components/front/ContentHeader';
import { HistoryProvider } from '../../context/History';
import { SidebarProvider } from '../../context/SideBar';
import ContentHistory from '../../components/back/ContentHistory';
import ContentSidebar from '../../components/back/ContentSidebar';


function History({ title }) {

    useEffect(() => {
        document.title = title;
    });

    return (
        <section className="section-dashboad">
            <ContentHeader>
                Historique
            </ContentHeader>
            <div className="flex history-content">
                <SidebarProvider>
                    <ContentSidebar />
                </SidebarProvider>
                <HistoryProvider>
                    <ContentHistory />
                </HistoryProvider>
            </div>
        </section>
    );
}

export default History;
