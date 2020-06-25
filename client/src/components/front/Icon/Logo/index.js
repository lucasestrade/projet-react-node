import React from 'react';
import providers from "../../../../providers/poviders";

function LogoIcon({ logoStyle }) {
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            className={logoStyle} viewBox="0 0 788.000000 493.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,493.000000) scale(0.100000,-0.100000)">
                <path d={providers.svg.MAIN_LOGO}/>
            </g>
        </svg>
    );
}

export default LogoIcon;
