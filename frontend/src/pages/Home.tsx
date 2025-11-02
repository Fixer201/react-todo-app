import React from 'react';
import Header from '../layout/Header';
import Hero from '../layout/Hero';
import Main from '../layout/Main';
import Footer from '../layout/Footer';
import AuthModal from '../components/auth/AuthModal';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Main />
            <Footer />
        </>
    );
};

export default Home;
