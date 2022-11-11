import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import SeeOr from './SeeOr';

const Addedserv = () => {
    const { name_of_service, image, price, description, _id } = useLoaderData();
    const { user } = useContext(AuthContext)
    const handlePlaceOrder = event => {
        event.preventDefault()
        const form = event.target;

        const name = user?.displayName || 'unreg';
        const email = user?.email || 'unreg';
        const serviceName = name_of_service;

        const order = {
            service: _id,
            NameofService: serviceName,
            price,
            customer: name,
            email

        }
        fetch('https://server-law.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)

        })
            .then(res => res.json()).then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('successfully added')
                    form.reset()
                }
            }).catch(er => console.log(er));



    }
    return (
        <div className='my-5'>
            <form onSubmit={handlePlaceOrder} className='grid grid-cols-1'>
                <h1 className='text-center'>cheackout order</h1>
                <input type="text" placeholder="Type here" defaultValue={name_of_service} className="input input-bordered input-success " />
                <input type="text" placeholder="Type Name here" defaultValue={user?.displayName} className="input input-bordered input-success " />
                <input type="text" placeholder="Type here" defaultValue={price} className="input input-bordered input-success " />
                <input type="text" placeholder="Type here" defaultValue={user?.email} className="input input-bordered input-success  " readOnly />
                <input className='btn btn-primary' type="submit" value="place order" />
            </form>

        </div>
    );
};

export default Addedserv;