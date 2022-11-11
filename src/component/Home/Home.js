import React, { useContext } from 'react';
import About from '../../About/About';
import Happyc from '../../Happy/Happyc';
import Banner from './Banner';
import { useLoaderData, Link } from 'react-router-dom'
import ServiceL from '../../Servicel/ServiceL';
import Ser from './Ser';
import SeeOr from '../Services/SeeOr';
import Private from '../Router/PrivateRoute/Private';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext)
    const services = useLoaderData()
    return (
        <div>

            <Banner></Banner>
            <Ser services={services}></Ser>


            <Happyc></Happyc>
            {/* {user?.email ?
                <>
                    <SeeOr></SeeOr>
                </>
                :
                <>
                    <h1>About</h1>
                </>
            } */}


            <About></About>
        </div>
    );
};

export default Home;