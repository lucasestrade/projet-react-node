import React, { useEffect } from 'react';
import ContentDashboard from '../../components/back/ContentDashboard';
import { DashboardProvider } from "../../context/Dashboard";

function Dashboard({title}){

    useEffect(() => {
        document.title = title;
    });

    return(
        <div className="block-dashboard">
            <DashboardProvider>
                <ContentDashboard />
            </DashboardProvider>
        </div>
    )

}

export default Dashboard;