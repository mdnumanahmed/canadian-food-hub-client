import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Spinner from '../shared/Spinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    const location = useLocation()

    if(loading){
        return <Spinner />
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} />;
};

export default PrivateRoute;