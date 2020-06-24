import React from 'react';
import Redirect from '../../Cta/Redirect';
import Logo from "../../Icon/Logo";
import Basket from "../../Icon/Basket";
import providers from "../../../providers/poviders";

function HeaderDesktop(){
    return (
        <header>
            <div className="header flex align-center justify-between">
                <div className="flex align-center">
                    <div>
                        <Redirect icon={true} to={providers.routes.HOME.PATH} title={providers.routes.HOME.TITLE} >
                            <Logo logoStyle="header-logo" />
                        </Redirect>
                    </div>
                    <div className="header-menu flex align-center">
                        <Redirect to={providers.routes.LOGIN.PATH} title={providers.routes.LOGIN.TITLE}>
                            {providers.routes.LOGIN.TITLE}
                        </Redirect>
                        <Redirect to={providers.routes.SIGNUP.PATH} title={providers.routes.SIGNUP.TITLE}>
                            {providers.routes.SIGNUP.TITLE}
                        </Redirect>
                    </div>
                </div>
                <div className="flex align-center">
                    <div>
                        <Redirect icon={true} to={providers.routes.BASKET.PATH} title={providers.routes.BASKET.TITLE} >
                            <Basket basketStyle="header-basket" />
                        </Redirect>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderDesktop;