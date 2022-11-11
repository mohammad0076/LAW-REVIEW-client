import React from 'react';
import Cart from './Cart';
import { useLoaderData } from 'react-router-dom'

const Services = () => {

    const services = useLoaderData()


    return (
        <div>
            <p className='text-2xl font-bold text-orange-600 text-center'>Service</p>
            <h2 className='text-3xl font-semibold text-center'>Our Tax Services Categories</h2>


            <div className='md:grid grid-rows-2 grid-flow-col gap-2 mr-56 '>

                {
                    services.map(service => <Cart service={service}></Cart>)
                }
            </div>

        </div>
    );
};

export default Services;