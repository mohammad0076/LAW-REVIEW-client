import React from 'react';
import About from '../../About/About';
import Happyc from '../../Happy/Happyc';
import Banner from './Banner';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Happyc></Happyc>

            <About></About>
        </div>
    );
};

export default Home;