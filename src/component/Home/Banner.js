import React from 'react';
import pic from './business-communication-connection-people-concept.jpg'
import logo from './../Footer/./logo.svg'
import { Link } from 'react-router-dom'
import './banner.css'

const Banner = () => {
    return (
        <div>



            <div className="carousel w-full py-10 sm:d-none">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='cimg'>
                        <img src={pic} className="w-full rounded-xl" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-72  top-2/4">
                        <div className='md:d-flex '>
                            <img src={logo} alt="" />
                            <h1 className='sm:text-3xl md:text-4xl font-bold text-violet-50 md:text-center'>
                                Find Your <br /> Tax Services with <br /> Best solution
                            </h1>
                            <Link className='btn-none' to='/services'> <button className=" btn  bg-rose-500 ml-36 mt-4 ">Services</button></Link>
                        </div>


                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;