import React, { useEffect } from 'react';
import ContentHeader from '../../components/front/ContentHeader';
import { LoginProvider } from '../../context/Login';
import ContentLogin from '../../components/back/ContentLogin';

function Login({ title }) {

    useEffect(() => {
        document.title = title;
    });

    return (
        <section className="section-dashboad">
            <ContentHeader>
                Connexion
            </ContentHeader>
            <div className="flex login-content">
                <LoginProvider>
                    <ContentLogin />
                </LoginProvider>
            </div>
        </section>
    );
}

export default Login;