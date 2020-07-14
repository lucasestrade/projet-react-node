import React from 'react';
import Redirect from '../../Cta/Redirect';
import Logo from "../../Icon/Logo";
import providers from "../../../../providers/providers";

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
                        <Redirect to={providers.routes.REGISTER.PATH} title={providers.routes.REGISTER.TITLE}>
                            {providers.routes.REGISTER.TITLE}
                        </Redirect>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderDesktop;