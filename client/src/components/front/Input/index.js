import React from 'react';

function Input({label, type}){

    return(
        <div className="flex column">
            <label>{label}</label>
            <input type={type} />
        </div>
    );

}

export default Input;