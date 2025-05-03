
import { NavLink,Link } from 'react-router';
import userIcon from '../../../assets/user.png'
import { AuthContext } from '../../context/AuthContext';
import { use } from 'react';

const Navbar = () => {
 
  
  const {user,logout } = use(AuthContext) 

 
  

  const handleLogout = ()=>{


    console.log('logouth'); 

    logout().then(()=>{


      alert('successfully logout')
      
    }).catch(res=>{

      alert(res.message)
    })
    
  }
  
  
  

  
  
    return (
        <div className=' flex flex-col md:flex md:flex-row justify-between gap-3 md:gap-0 items-center '>
          <div className='text-xs md:text-[16px]'>
         {user?.email} 
          </div>
          <div className="nav flex md:gap-5 gap-10 md:text-[16px] text-[14px] text-accent">

            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
          </div>
          <div className='login-btn flex gap-2 md:gap-4'>
            <img className='md:w-12 w-6 rounded-full' src={`${user?user.photoURL :userIcon}`} alt="" />


          {

            user? <button className='btn btn-primary flex  px-3 py-1 md:px-6 text-[12px]  md:text-[14px]'  onClick={handleLogout}> LogOut </button> :   <Link to={'/auth/loing'} className=' btn btn-primary md:text-[16px]  text-[14px]  md:px-6'>Login</Link>
          }
            
          </div>
        </div>
    );
};

export default Navbar;