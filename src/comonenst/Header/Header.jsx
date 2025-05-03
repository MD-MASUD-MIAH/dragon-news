import React from 'react';
import logo from '../../../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex gap-3 py-5 justify-center flex-col items-center'>
           <img className='w-[250px] md:w-fit' src={logo} alt="" />
           <p className='text-accent text-xs md:text-xl'>Journalism Without Fear or Favour</p> 

          
           <p className='font-semibold text-accent text-xs md:text-[16px]'>{
            
            format(new Date(),"EEEE , MMMM MM, yyyy")
            
            }</p>

        </div>
    );
};

export default Header;