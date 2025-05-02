import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../comonenst/Loader';

const PriveteCo = ({children}) => {

    const location = useLocation()
const {user,loading} = use(AuthContext)  


if(loading){


    return <Loader></Loader>
}

if(user && user?.email){


    return children
    
}else{


  return  <Navigate state={location.pathname} to='/auth/loing'></Navigate> 


}


    
};

export default PriveteCo;