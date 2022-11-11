import React from 'react';
import { useLoaderData } from 'react-router-dom'
const Srr3 = ({ mail }) => {
    const loader = useLoaderData()
    {
        console.log(loader.name_of_service)
        console.log(mail?.comment)
    }

    return (
        <div className='mt-5'>
            {

                (loader.name_of_service).includes(mail?.comment) ?
                    <h1 c>{mail.customer}  <p className='text-2xl'>{mail.NameofService}</p></h1>
                    :
                    <h1></h1>
            }



        </div>
    );
};

export default Srr3;