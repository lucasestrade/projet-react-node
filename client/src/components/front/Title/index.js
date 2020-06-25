import React from 'react';

function Title({ children, type }){

    switch(type){
        case "secondary":
            return(
                <h2 className="title secondary-title">
                    {children}
                </h2>
            )
        case "first":
        default:
            return(
                <h1 className="title first-title">
                    {children}
                </h1>
            )
    }
}

export default Title;