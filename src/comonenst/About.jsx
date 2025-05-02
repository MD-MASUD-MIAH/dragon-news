import React from 'react';
import { Link } from 'react-router';

const About = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center'>I am  about</h1> 

            <Link to='/' className='btn  btn-secondary'>HOme</Link>
        </div>
    );
};

export default About;