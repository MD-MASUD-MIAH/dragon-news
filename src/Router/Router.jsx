import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import AuthLayout from "../layout/AuthLayout";
import Login from "../comonenst/Login";
import Register from "../comonenst/Register";
import NewsDeatils from "../comonenst/layoutHome/NewsDeatils";
import PriveteCo from "../context/PriveteCo";
import About from "../comonenst/About";
import Career from "../comonenst/Career";
import Loader from "../comonenst/Loader";



export const router = createBrowserRouter([




           { path:'/' ,Component:HomeLayout,
           

            children:[

   { path:'',Component:Home},


    {path:'/category/:id',
       loader:()=>fetch('/news.json'),
        Component:CategoryNews,
        hydrateFallbackElement:<Loader></Loader>
    
    }


            ]
           },




{

    path:'/auth',Component:AuthLayout, 

    children:[


        {path:'/auth/loing', Component:Login},

        {path:'/auth/register', Component:Register}
    ]
},

{

    path:'newsdeails/:id',
    
     loader:()=>fetch('/news.json'),


    element:<PriveteCo>
        <NewsDeatils></NewsDeatils>
        </PriveteCo>, 
        hydrateFallbackElement:<Loader></Loader>

},
{

    path:'/about',Component:About
},

{path:'/career',Component:Career}



])