import React from 'react';
import { Link } from 'react-router';
import { IoMdArrowBack } from "react-icons/io";
const DeailsCard = ({newsdata}) => {


    const {
        title,
        thumbnail_url,
      details
       
      } = newsdata;
    return (
        <div className='p-5 border rounded-xl border-base-200'> 
<div className=' w-full justify-center'>
    
<img className='w-full' src={thumbnail_url} alt="" />
       
</div>

<h1 className='font-bold text-xl py-4'> {title}</h1> 
 
 <p className='py-10 text-accent'>{details}</p> 


 <Link to={`/category/${newsdata.category_id}`} className='btn btn-secondary'> <IoMdArrowBack size={24}></IoMdArrowBack> All news in this category</Link>
        </div>
    );
};

export default DeailsCard;