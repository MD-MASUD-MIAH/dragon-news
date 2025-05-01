import React from 'react';
import logo from '../../../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex gap-3 py-5 justify-center flex-col items-center'>
           <img src={logo} alt="" />
           <p className='text-accent'>Journalism Without Fear or Favour</p> 

          
           <p className='font-semibold text-accent'>{
            
            format(new Date(),"EEEE , MMMM MM, yyyy")
            
            }</p>

        </div>
    );
};

export default Header;