import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user ,loading} = use(AuthContext);
    // use location to track the location 
    const location = useLocation();
    // console.log(location);
    if(loading){
        return <span className="loading loading-infinity loading-xl"></span>
    }
    if (!user) {
        return <Navigate state={location?.pathname} to={'/signIn'}></Navigate>
    }
    return children;
};

export default PrivateRoutes;