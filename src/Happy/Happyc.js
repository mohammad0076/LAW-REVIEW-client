import React from 'react';
import { BeakerIcon, UserIcon, Square3Stack3DIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'


const Happyc = () => {
    return (
        <div className="stats shadow ml-40 mb-10">

            <div className="stat">
                <div className="stat-figure text-primary">
                    <UserIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="stat-title">Happy Clients</div>
                <div className="stat-value text-primary">25.6K</div>
                <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <Square3Stack3DIcon className="h-6 w-6 text-secondary" />
                </div>
                <div className="stat-title">Awards</div>
                <div className="stat-value text-secondary">3</div>
                <div className="stat-desc">NBR certified Award </div>
            </div>
            <div className="stat">
                <div className="stat-figure text-primary">
                    <RocketLaunchIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="stat-title">Exprience</div>
                <div className="stat-value text-primary">12 years</div>
                <div className="stat-desc">accurate provider</div>
            </div>



        </div>
    );
};

export default Happyc;