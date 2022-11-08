import React from 'react';
import { Link } from 'react-router-dom'
import logo from './../Footer/logo.svg'

const Header = () => {


    const manu = <>

        <li className='font-semibold'><Link to='/'>Home</Link></li>
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
            <div className="navbar-end">
                <a className="btn bg-rose-500">Get started</a>
            </div>
        </div>
    );
};

export default Header;