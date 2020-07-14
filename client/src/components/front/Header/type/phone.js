import React from 'react';
import Redirect from '../../Cta/Redirect';
import BurgerMenuIcon from '../../Icon/BurgerMenu';
import LogoIcon from "../../Icon/Logo";
import providers from "../../../../providers/providers";
import Cta from '../../Cta/Cta';

function HeaderPhone({ burgerMenuClickAction, isOpen }){
    return (
        <header>
            {isOpen ? openMenu(burgerMenuClickAction) : null}
            <div className="header flex align-center justify-between">
                <div className="flex align-center">
                    <div>
                        <Redirect icon={true} to={providers.routes.HOME.PATH} title={providers.routes.HOME.TITLE} >
                            <LogoIcon logoStyle="header-logo" />
                        </Redirect>
                    </div>
                </div>
                <div className="flex align-center">
                    <div className="header-menu flex align-center">
                        <Cta ctaStyle="cta-nude" onClick={burgerMenuClickAction}>
                            <BurgerMenuIcon burgerMenuStyle="header-burgermenu" />
                        </Cta>
                    </div>
                </div>
            </div>
        </header>
    )
}

function openMenu(burgerMenuClickAction){
    return (
        <>
            <Cta ctaStyle="phone-menu-filter" onClick={burgerMenuClickAction}>
            </Cta>
            <div className="phone-menu flex column">
                <div className="block-phone-menu-logo flex justify-center">
                    <LogoIcon logoStyle="phone-menu-logo" />
                </div>
                <Redirect to={providers.routes.LOGIN.PATH} title={providers.routes.LOGIN.TITLE}>
                    {providers.routes.LOGIN.TITLE}
                </Redirect>
                <Redirect to={providers.routes.REGISTER.PATH} title={providers.routes.REGISTER.TITLE}>
                    {providers.routes.REGISTER.TITLE}
                </Redirect>
            </div>
        </>
    )
}

export default HeaderPhone;