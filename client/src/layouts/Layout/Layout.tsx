import React from 'react';
import { Root } from './styles';
import { Footer } from './components/Footer';
import { Main } from '../../pages';
import { Header } from './components/Header';

const Layout = () => {
    return (
        <Root>
            <Header />
            <Main />
            <Footer />
        </Root>
    );
};

export default Layout;
