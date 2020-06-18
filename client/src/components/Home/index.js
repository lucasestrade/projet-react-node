import React, { useEffect } from 'react';
import CtaRedirect from '../Cta/Redirect';

function Home() {
    
    useEffect(() => {
        document.title = "Page Home";
    });

    return (
        <div>page Home
            <CtaRedirect to="/login" value="Rediriger vers login"></CtaRedirect>
        </div>
    );
}

export default Home;
