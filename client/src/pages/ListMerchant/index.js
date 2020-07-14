import React, { useEffect } from 'react';
import ContentHeader from '../../components/front/ContentHeader';
import { SidebarProvider } from '../../context/SideBar';
import ContentSidebar from '../../components/back/ContentSidebar';
import ContentListMerchant from '../../components/back/ContentListMerchant';
import { ListMerchantProvider } from '../../context/ListMerchant';


function ListMerchand({ title }) {

    useEffect(() => {
        document.title = title;
    });

    return (
        <section className="section-listmarchand">
            <ContentHeader>
                Liste des marchands
            </ContentHeader>
            <div className="flex listmarchand-content">
                <SidebarProvider>
                    <ContentSidebar />
                </SidebarProvider>
                <ListMerchantProvider>
                    <ContentListMerchant />
                </ListMerchantProvider>
            </div>
        </section>
    );
}

export default ListMerchand;
