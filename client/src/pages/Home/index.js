import React, { useEffect } from 'react';

function Home({title}) {
    //console.log(selectors.getMenuDisplayIsPhone());
    useEffect(() => {
        document.title = title;
       
    });
    
    return (
        <div>

        </div>
    );
}

export default Home;
