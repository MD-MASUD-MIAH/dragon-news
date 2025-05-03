import React, { use } from 'react';
import Marquee from 'react-fast-marquee';
import { AuthContext } from '../../context/AuthContext';

const LatestNews = () => { 


    const {breaking} = use(AuthContext)
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'> 
         <p className='text-base-100 text-xs md:text-[16px] py-0.5 px-1.5 bg-secondary md:px-3 md:py-1.5'> Latest</p>
          <Marquee className='flex gap-3' pauseOnHover={true} speed={60}>
 <div className='flex gap-6'>
 {

breaking.map(news=><p news={news} className=' text-xs md:text-[16px] font-bold' >**{news.title} **</p>)
}
 </div>
          
          </Marquee>
        </div>
    );
};

export default LatestNews;