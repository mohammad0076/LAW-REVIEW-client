import React, { useContext } from 'react';
import { useLoaderData, Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Myreviews from './Myreviews';
import Review from './Review';
import Showcom from './Showcom';
import Srr from './Srr';



const Servicedtails = () => {
    const service = useLoaderData()
    const { _id } = service;
    const { user, logout } = useContext(AuthContext)
    const handle = event => {
        event.preventDefault();
        const form = event.target;

        const name = user?.displayName || 'unreg';
        const email = user?.email || 'unreg';
        const serviceName = form.name.value;
        const comment = service.name_of_service

        const comme = {

            NameofService: serviceName,

            comment: comment,
            customer: name,
            email
        }
        fetch('http://localhost:5000/ommens', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comme)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('succesfully reviewed')
                    form.reset()

                }
            })
            .catch(err => console.error(err))


        console.log(serviceName)

    }


    return (
        <div className='mt-24'>
            <p className='text-2xl font-bold text-orange-600 text-center '>{service.name_of_service} </p>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-5">
                <figure className='h-full w-full'><img src={service.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Price:-{service.price}</h2>
                    <p>{service.description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/addedservices/${_id}`}><button className="btn btn-primary">Add Service</button></Link>
                    </div>
                </div>
            </div>
            {/* <Review service={service}></Review> */}
            <div className='mt-48'>
                {
                    user?.uid ?
                        <div>
                            <div><span className="label-text">{user?.displayName}</span>
                                <span> <img src={user?.photoURL} style={{ height: '50px', width: '50px', borderRadius: '50%' }} alt="" /></span>
                                <form onSubmit={handle}>
                                    <input type="text" placeholder="Enter Review" className="text-5xl" name='name' />
                                    <button className='btn btn-primary' type="submit">submit</button>
                                </form>
                            </div>
                        </div>
                        :
                        <h1 className='text-2xl font-bold text-orange-600 text-center mb-5'>Please Login to add review</h1>

                }
            </div>
            <div>
                <Srr serv={service.name_of_service}></Srr>
            </div>
        </div>
    );
};

export default Servicedtails;