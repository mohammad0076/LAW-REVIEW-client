import React from 'react';
import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Private = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <button type="button" class="bg-indigo-500 ..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

            </svg>
            Processing...
        </button>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default Private;