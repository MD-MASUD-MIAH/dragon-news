import React from 'react';
import Header from '../comonenst/Header/Header';
import { Outlet } from 'react-router';
import LatestNews from '../comonenst/LatestNews/LatestNews';
import Navbar from '../comonenst/navbar/Navbar';
import LetftAside from '../comonenst/layoutHome/letftAside';
import RightAside from '../comonenst/layoutHome/RightAside';

const HomeLayout = () => {
    return (
        <div>
          <header>

          <Header>
            
            
            </Header> 

            <section className='w-11/12 mx-auto my-3'>

                <LatestNews></LatestNews>
            </section>

            <nav  className='w-11/12 mx-auto my-3' >
                <Navbar></Navbar>
            </nav>
          </header>
          <main className='w-11/12 mx-auto my-3 gap-4 grid grid-cols-12'>
  
           <aside className='col-span-3 sticky top-2 h-fit'>
            <LetftAside></LetftAside>
           </aside>
            <section className='main col-span-6'>

                <Outlet></Outlet>
            </section>
           <aside className='col-span-3 sticky top-2 h-fit'>
            <RightAside></RightAside>
           </aside>
          </main>
        </div>
    );
};

export default HomeLayout;