import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then((res)=>res.json())

const Categories = () => {

    // console.log(categoryPromise); 
     
    const categories = use(categoryPromise) 

    // console.log(categories); 
    
    return (
        <div>
            <h2 className='font-bold'>All Categories</h2>

            <div className='md:grid md:grid-cols-1 grid  grid-cols-3 mt-5'>
                {

                    categories.map(cat =><NavLink to={`/category/${cat.id}`} className="
font-semibold text-accent btn bg-base-100 border-0 text-xs md:text-[14px] hover:bg-base-200" key={cat.id}>{cat.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;