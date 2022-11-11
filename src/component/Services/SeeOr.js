import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Orderrow from './Orderrow';

const SeeOr = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrder] = useState([])
    {
        console.log(orders)
    }

    useEffect(() => {
        fetch(`https://server-law.vercel.app/orders?email=${user?.email}`).then(res => res.json()).then(data => setOrder(data))
    }, [user?.email])
    return (
        <div>
            <h2 className='text-center font-extrabold'>You have {orders.length} Service Request</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>SERVICE NAME Name</th>
                            <th>Mail ADDRESS</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            orders.map(order => <Orderrow key={order._id} order={order} ></Orderrow>)
                        }





                    </tbody>



                </table>
            </div>

        </div>
    );
};

export default SeeOr;