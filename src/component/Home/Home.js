import React from 'react';
import About from '../../About/About';
import Happyc from '../../Happy/Happyc';
import Banner from './Banner';
import { useLoaderData, Link } from 'react-router-dom'
import ServiceL from '../../Servicel/ServiceL';
import Ser from './Ser';
const Home = () => {
    const services = useLoaderData()
    return (
        <div>

            <Banner></Banner>
            <Ser services={services}></Ser>


            <Happyc></Happyc>

            <About></About>
        </div>
    );
};

export default Home;