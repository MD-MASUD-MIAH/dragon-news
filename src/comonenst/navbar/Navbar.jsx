
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
        <div className='flex justify-between items-center'>
          <div>
         {user?.email} {import.meta.env.VITE_name}
          </div>
          <div className="nav flex gap-5 text-accent">

            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
          </div>
          <div className='login-btn flex gap-4'>
            <img className='w-12 rounded-full' src={`${user?user.photoURL :userIcon}`} alt="" />


          {

            user? <button className='btn btn-primary md:px-6'  onClick={handleLogout}> LogOut </button> :   <Link to={'/auth/loing'} className='btn btn-primary md:px-6'>Login</Link>
          }
            
          </div>
        </div>
    );
};

export default Navbar;