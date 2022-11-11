import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom'
import Com from './Com';
import Myreviews from './Myreviews';

const Review = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <div>
            <h1>Review</h1>
            <Link>{
                user?.uid ?
                    <>
                        <div className='flex flex-row ...'>


                            <Myreviews name={user?.displayName} src={user?.photoURL}></Myreviews>

                        </div>

                    </>
                    :
                    <h1 className='font'> Please Login to add review </h1>

            }</Link>

        </div>
    );
};

export default Review;