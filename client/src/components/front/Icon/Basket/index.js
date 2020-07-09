import React from 'react';
import providers from '../../../../providers/providers';

function BasketIcon({ basketStyle }){
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1280.000000 986.000000"
            preserveAspectRatio="xMidYMid meet"
            className={basketStyle}>
            <g transform="translate(0.000000,986.000000) scale(0.100000,-0.100000)">
                <path d={providers.svg.BASKET.d1}/>
                <path d={providers.svg.BASKET.d2}/>
                <path d={providers.svg.BASKET.d3}/>
            </g>
        </svg>
    );
}

export default BasketIcon;