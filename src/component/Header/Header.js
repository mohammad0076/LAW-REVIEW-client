import React, { useContext, Image } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import logo from './../Footer/logo.svg'
import { BeakerIcon, FaceFrownIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const handlelogout = () => {
        logout()
            .then(() => { }).catch(error => console.error(error))
    }


    const manu = <>

        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>


        <Link>{
            user?.uid ?
                <>
                    <div className='flex flex-row ...'>
                        <li className='font-semibold mt-3 mr-2'>{user?.displayName}</li>
                        <li className='font-semibold' onClick={handlelogout} ><Link to='/login'>LogOut</Link></li>
                        <li className='font-semibold'><Link to='/myreviews'>My Reviews</Link></li>
                        <li className='font-semibold'><Link to='/addedservices'>Added Services</Link></li>



                    </div>






                </>
                :
                <><div className='flex flex-row ...'>
                    <li className='font-semibold'><Link to='/login'>Log in</Link></li>
                    <li className='font-semibold'><Link to='/signup'>signup</Link></li>

                </div>

                </>
        }</Link>
        <Link>

            {
                user?.photoURL ?

                    <img src={user?.photoURL} style={{ height: '50px', width: '50px', borderRadius: '50%' }} alt="" />
                    :
                    <FaceFrownIcon></FaceFrownIcon>
            }
        </Link>




    </>
    return (
        <div className="navbar bg-primary text-primary-content h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            manu
                        }

                    </ul>
                </div>
                <Link to='/' className=""><img className="  object-top h-32 w-48 ..." src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {manu}

                </ul>
            </div>

        </div>
    );
};

export default Header;