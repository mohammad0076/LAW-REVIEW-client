import React from 'react';

const Sub = ({ sub }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{sub.custome}</h2>
                <p>{sub.NameofService}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"></button>
                </div>
            </div>
        </div>
    );
};

export default Sub;