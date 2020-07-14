import React, { useEffect } from 'react';
import ContentHeader from '../../components/front/ContentHeader';
import { RegisterProvider } from '../../context/Register';
import ContentRegister from '../../components/back/ContentRegister';

function Register({ title }) {

    useEffect(() => {
        document.title = title;
    });

    return (
        <section className="section-register">
            <ContentHeader>
                Inscription Marchand
            </ContentHeader>
            <RegisterProvider>
                <ContentRegister />
            </RegisterProvider>
        </section>
    );
}

export default Register;
