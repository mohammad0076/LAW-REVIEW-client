import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Addedserv from '../Services/Addedserv';
import Myreviews from '../Services/Myreviews';
import SeeOr from '../Services/SeeOr';
import Servicedtails from '../Services/Servicedtails';
import Services from '../Services/Services';
import Showcom from '../Services/Showcom';
import Srr3 from '../Services/Srr3';
import Signup from '../Signup/Signup';
import Blogs from './Blogs';
import Private from './PrivateRoute/Private.js';
const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    loader: () => fetch('http://localhost:5000/servicesl'),
                    element: <Home></Home>
                },
                {
                    path: '/services',
                    loader: () => fetch('http://localhost:5000/services'),
                    element: <Services></Services>
                },
                {
                    path: '/services/:id',
                    loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                    element: <Servicedtails></Servicedtails>
                },
                {
                    path: '/login',

                    element: <Login></Login>
                },
                {
                    path: '/signup',

                    element: <Signup></Signup>
                },
                {
                    path: '/myreviews',

                    element: <Private><Myreviews></Myreviews></Private>
                },
                {
                    path: '/addedservices/:id',
                    loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),

                    element: <Private><Addedserv></Addedserv></Private>
                }, {
                    path: '/addedservices',

                    element: <SeeOr></SeeOr>
                }, {
                    path: '*', element: <div>This route not found go to hell</div>
                }, {
                    path: '/showcoments',
                    loader: fetch('http://localhost:5000/ommens'),
                    element: <Showcom></Showcom>

                }, {
                    path: '/blogs',

                    element: <Blogs></Blogs>
                }, {
                    path: '/sr',
                    loader: () => fetch('http://localhost:5000/services'),

                    element: <Srr3></Srr3>
                }





            ]
        }

    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Router;