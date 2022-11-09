import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Home/Home';
import Main from '../Main/Main';
import Services from '../Services/Services';
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