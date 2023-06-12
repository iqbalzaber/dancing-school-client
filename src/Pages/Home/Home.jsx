import React from 'react';
import Banner from './Banner';
import About from './About';
import CountSection from './CountSection';
import PopularClass from './PopularClass';
import { Helmet } from 'react-helmet-async';
import PopularInstructor from './PopularInstructor';
import ExtraSection from '../ExtraSection';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title> Flaire | Home</title>
      </Helmet>
     
            <Banner />
            <PopularInstructor />
            <About />
            <CountSection />
            <ExtraSection/>
            <PopularClass />
        </div>
    );
};

export default Home;