import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from './Loading';
import { signOut } from 'firebase/auth';

const RequareAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin();
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!user || admin === false) {
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequareAdmin;