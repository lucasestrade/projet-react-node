import React from 'react';
import HeaderDesktop from "./type/desktop";
import HeaderPhone from "./type/phone";
import useApp from "../../hooks/useApp";

function AppHeader(){

    const { selectors, actions } = useApp();
    let isPhone = selectors.getMenuDisplayIsPhone();

    window.onresize = function(){
        if(window.innerWidth < 800){
            actions.changeMenuDisplay(true);
        }else{
            actions.changeMenuDisplay(false);
        }
    }

    if(isPhone){
        return (
            <HeaderPhone />
        );
    }else{
        return (
            <HeaderDesktop />
        )
    }
}

export default AppHeader;