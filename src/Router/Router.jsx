import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import AuthLayout from "../layout/AuthLayout";
import Login from "../comonenst/Login";
import Register from "../comonenst/Register";



export const router = createBrowserRouter([




           { path:'/' ,Component:HomeLayout,
           

            children:[

    {path:'', Component: Home },


    {path:'/category/:id',
        loader:()=>fetch('/news.json'),
        Component:CategoryNews}


            ]
           },
{

    path:'/auth',Component:AuthLayout, 

    children:[


        {path:'/auth/loing', Component:Login},

        {path:'/auth/register', Component:Register}
    ]
}



])