import React, { useEffect } from "react";
import { SidebarProvider } from "../../../context/SideBar";
import Redirect from '../../front/Cta/Redirect';
import providers from "../../../providers/providers";

function ContentSidebar() {

    useEffect(() => {
    })

    return (
        <div>
            <div class="flex column">
                <Redirect to={providers.routes.DASHBOARD.PATH} title={providers.routes.DASHBOARD.TITLE}>
                    {providers.routes.DASHBOARD.TITLE}
                </Redirect>
                <Redirect to={providers.routes.PARAMETERS.PATH} title={providers.routes.PARAMETERS.TITLE}>
                    {providers.routes.PARAMETERS.TITLE}
                </Redirect>
                <Redirect to={providers.routes.HISTORY.PATH} title={providers.routes.HISTORY.TITLE}>
                    {providers.routes.HISTORY.TITLE}
                </Redirect>
            </div>
        </div>
    )

}


export default ContentSidebar;

// parametre, listes commande effectué, credentials, kpi 