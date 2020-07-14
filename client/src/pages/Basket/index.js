import React, { useEffect } from 'react';

function Basket({title}) {
    
    useEffect(() => {
        document.title = title;
    });

    return (
        <div>

        </div>
    );
}

export default Basket;
