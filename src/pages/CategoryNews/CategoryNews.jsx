 
 import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../comonenst/layoutHome/NewsCard';
import { AuthContext } from '../../context/AuthContext';
 
 const CategoryNews = () => {

    const {id} = useParams()

    const data = useLoaderData()  

  
    const { dataBraking} = use(AuthContext)

    const [ categoryNews,setCategoryNews] = useState([])

 useEffect(()=>{


     
     if(id == "0"){
         
        

        setCategoryNews(data)
    }else if(id == "1"){

       
        const filtenewsa = data.filter(news=>news.others.is_today_pick == true) 

        setCategoryNews(filtenewsa) 

        dataBraking(filtenewsa)
    }else{

       

        const filterNews = data.filter((news)=>news.category_id == id) 

        setCategoryNews(filterNews)
    }
 },[data,id])

   
    
    return (
        <div>
        
        <h2 className='font-bold mb-5'>Total <span className='text-secondary'>  {categoryNews.length}</span> News Found</h2>


  <div className='grid grid-cols-1  gap-5'>

    {

        categoryNews.map(news=><NewsCard key={news.category_id} news={news}></NewsCard>)
    }
  </div>

        </div>
    );
 };
 
 export default CategoryNews;