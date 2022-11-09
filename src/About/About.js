import React from 'react';
import img from './waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-10">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">About myself</h1>
                    <h1 className="text-2xl font-semibold mt-1">Adv. ABBAS Uddin</h1>

                    <p className="py-6 font-semibold"> Tax Consultant And Lawyer Dhaka Judge Court</p>
                    <button className="btn btn-primary">View More</button>
                </div>
            </div>
        </div>
    );
};

export default About;