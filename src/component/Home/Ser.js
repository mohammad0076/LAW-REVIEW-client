import React from 'react';
import { useLoaderData, Link } from 'react-router-dom'
import ServiceL from '../../Servicel/ServiceL';

const Ser = ({ services }) => {
    return (
        <div className='my-10'>
            <div className='grid grid-rows-1 grid-flow-col gap-4 '>
                {
                    services.map(service => <ServiceL service={service}></ServiceL>)
                }


            </div><Link to='/services'> <button className="btn bg-rose-500 ml-96">Services</button></Link>

        </div>
    );
};

export default Ser;