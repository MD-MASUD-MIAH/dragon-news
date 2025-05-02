import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import RightAside from './RightAside';
import { useLoaderData, useParams } from 'react-router';
import DeailsCard from './DeailsCard';

const NewsDeatils = () => {

 const [newsdata,setNewsdata] = useState({})
    const {id} =  useParams()  
  const news = useLoaderData()
    // console.log(id,news);  


    useEffect(()=>{

        const singlenews = news.find(news=>news.id == id) 
     setNewsdata(singlenews)

    },[news])
    
    return (
        <div>
          <header>
            <Header></Header>
          </header>

          <main className='grid grid-cols-12 gap-4 w-11/12 mx-auto'>

            <div className='col-span-9'>
   <h1 className='text-xl font-bold mt-5 py-8'>Daragon News</h1>

       <DeailsCard newsdata ={newsdata}></DeailsCard>
            </div> 
<div className='col-span-3'>
<RightAside></RightAside>
</div>
           
          </main>
        </div>
    );
};

export default NewsDeatils;