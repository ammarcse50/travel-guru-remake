import React, { useContext } from 'react';
import { AuthContext } from '../components/shared/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
           
           const {user}= useContext(AuthContext)

           const Navigate= useNavigate();

    if(user)
    {
        return children
    }
    return <Navigate to="/login"> </Navigate>
};

export default PrivateRoutes;