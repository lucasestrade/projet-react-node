import React from 'react';
import Redirect from '../../Cta/Redirect';
import BurgerMenuIcon from '../../Icon/BurgerMenu';
import LogoIcon from "../../Icon/Logo";
import BasketIcon from "../../Icon/Basket";
import providers from "../../../../providers/poviders";
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
                    <div>
                        <Redirect icon={true} to={providers.routes.BASKET.PATH} title={providers.routes.BASKET.TITLE} >
                            <BasketIcon basketStyle="header-basket" />
                        </Redirect>
                    </div>
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
                <Redirect to={providers.routes.SIGNUP.PATH} title={providers.routes.SIGNUP.TITLE}>
                    {providers.routes.SIGNUP.TITLE}
                </Redirect>
            </div>
        </>
    )
}

export default HeaderPhone;