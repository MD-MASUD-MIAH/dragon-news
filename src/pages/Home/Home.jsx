import React, { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
const {loading} = use(AuthContext)

    return <>
    
    {
            loading?<span className="loading loading-dots loading-xl"></span>:<Navigate to='category/1'></Navigate> 
        }
    </>
    
};

export default Home;