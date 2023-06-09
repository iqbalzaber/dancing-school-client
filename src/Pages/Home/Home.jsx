import React from 'react';
import Banner from './Banner';
import About from './About';
import CountSection from './CountSection';
import PopularClass from './PopularClass';

const Home = () => {
    return (
        <div>
     
            <Banner />
            <About />
            <CountSection />
            <PopularClass />
        </div>
    );
};

export default Home;