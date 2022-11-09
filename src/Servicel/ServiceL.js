import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceL = ({ service }) => {

    return (
        <div className='my-5 '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">



                    <PhotoProvider>
                        <PhotoView src={service.image}>
                            <img src={service.image} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service.name_of_service}</h2>
                    <p>{service.description.slice(0, 80)}...</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Show More</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ServiceL;