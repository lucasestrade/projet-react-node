import React, { useEffect } from "react";
import Redirect from '../../front/Cta/Redirect';
import providers from "../../../providers/providers";

function ContentSidebar() {

    useEffect(() => {
    })

    return (
        <div>
            <div className="flex column">
                <Redirect to={providers.routes.DASHBOARD.PATH} title={providers.routes.DASHBOARD.TITLE}>
                    {providers.routes.DASHBOARD.TITLE}
                </Redirect>
                {
                    window.localStorage.getItem("isAdmin") === "false"
                    ?
                        <Redirect to={providers.routes.PARAMETERS.PATH} title={providers.routes.PARAMETERS.TITLE}>
                            {providers.routes.PARAMETERS.TITLE}
                        </Redirect>
                    :
                        null
                }
                <Redirect to={providers.routes.HISTORY.PATH} title={providers.routes.HISTORY.TITLE}>
                    {providers.routes.HISTORY.TITLE}
                </Redirect>
                {
                    window.localStorage.getItem("isAdmin") === "true"
                    ?
                        <Redirect to={providers.routes.LIST_MERCHANT.PATH} title={providers.routes.LIST_MERCHANT.TITLE}>
                            {providers.routes.LIST_MERCHANT.TITLE}
                        </Redirect>
                    :
                        null
                }
            </div>
        </div>
    )

}


export default ContentSidebar;