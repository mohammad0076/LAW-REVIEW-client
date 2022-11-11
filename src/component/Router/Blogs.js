import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='font-bold'>Difference between SQL and NoSQL?</h1>
            <p>SQL structured and noSQL is not Strucctured  </p>

            <h1 className='font-bold'>What is JWT, and how does it work?</h1>
            <p>A compact and self-contained way for securely transmitting information between parties as a JSON object.</p>


            <h1 className='font-bold'>What is the difference between javascript and NodeJS?</h1>
            <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side</p>
            <h1 className='font-bold'>How does NodeJS handle multiple requests at the same time?</h1>
            <p>NodeJS receives multiple client requests and places them into EventQueue.</p>

        </div>
    );
};

export default Blogs;