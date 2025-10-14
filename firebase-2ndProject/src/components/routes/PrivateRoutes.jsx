import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user } = use(AuthContext);
    if (!user) {
        return <Navigate to={'/signIn'}></Navigate>
    }
    return children;
};

export default PrivateRoutes;