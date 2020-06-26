import React from 'react';
import providers from '../../../../providers/providers';

function BurgerMenuIcon({ burgerMenuStyle }){
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
            className={burgerMenuStyle}>
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
            <path d={providers.svg.BURGER_MENU.d1}/>
            <path d={providers.svg.BURGER_MENU.d2}/>
            <path d={providers.svg.BURGER_MENU.d3}/>
            </g>
        </svg>
    );
}

export default BurgerMenuIcon;