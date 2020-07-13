import React from "react";

function Loader(){
    return (
        <div className="loader flex justify-center align-center">
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    )
}

export default Loader;