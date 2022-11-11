import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Myrow from './Myrow';

const Myreviews = ({ name, src }) => {
    const { user } = useContext(AuthContext)
    const [mymail, setMail] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/ommens?email=${user.email}`).then(res => res.json()).then(data => setMail(data))
    }, [user?.email])

    return (
        <div>
            <div>
                <h2 className='text-center font-extrabold'>you have {mymail.length} review</h2>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>


                                <th></th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                mymail.map(mail => <Myrow mail={mail}></Myrow>)
                            }





                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default Myreviews;