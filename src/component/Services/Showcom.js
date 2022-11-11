import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Sub from './Sub';

const Showcom = () => {
    const subs = useLoaderData();

    return (



        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{subs.custome}</h2>
                <p>{subs.NameofService}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"></button>
                </div>
            </div>
        </div>

    );
};

export default Showcom;