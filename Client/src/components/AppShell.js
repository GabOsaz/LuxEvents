import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AppShell = ({ children }) => {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default AppShell;