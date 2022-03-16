import { useNavigate, useLocation } from 'react-router-dom';
import React, {useEffect} from 'react';

const ProtectedRoute = ({children}) => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
       if(!localStorage.getItem('token')) {
            navigate('/auth/login', {
                replace: false,
                state: {
                    returnUrl: location
                }
            })
       }
    }, []);
    return (
        <>
            {children}
        </>
    );
}

export default ProtectedRoute;
