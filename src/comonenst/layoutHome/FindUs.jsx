import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='py-5 mt-4'>
            
        <h1 className='font-bold'>Find On Us</h1> 

        <div className="join join-vertical w-full py-4 ">
  <button className="btn bg-base-100 justify-start py-4 hover:bg-base-200 join-item"> <FaFacebook></FaFacebook> FaceBook</button>
  <button className="btn bg-base-100 justify-start py-4 hover:bg-base-200 join-item"> <FaTwitter></FaTwitter> Twitter</button>
  <button className="btn bg-base-100 justify-start py-4 hover:bg-base-200 join-item"> <FaInstagram></FaInstagram> Instagram</button>
</div>
        </div>  

       
    );
};

export default FindUs;