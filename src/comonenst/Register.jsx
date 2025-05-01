import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';
const Register = () => {

const { creatUser} =use(AuthContext)
  const handleRegister =(e)=>{

    e.preventDefault() 

    // const form = e.target  

    const email = e.target.email.value 


    console.log(email);
    
    const name =e.target.name.value; 


    const password = e.target.password.value; 
     
    const photo  = e.target.photo.value ; 

    console.log(name,password,photo,email);
    

  creatUser(email,password).then(result=>{

    console.log(result.user)
    
  }).catch(error=>{


    console.log(error.message);
    
  })

  }
    return (
        <div className='flex items-center justify-center min-h-screen'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"> 

           <h1 className='text-center pt-8
            text-2xl font-bold  '>Register your account</h1>
 <div className="card-body ">
   <form onSubmit={handleRegister} className="fieldset border-t bordker-base-200 pt-6 py-4">


     <label className="label">Your Name</label>
     <input name='name' type="text" className="input" placeholder="Name" /> 

     <label className="label">Photo URL</label>
     <input name='photo' type="text" className="input" placeholder="Photo url" /> 


     <label className="label">Email</label>
     <input name='email' type="email" className="input" placeholder="Email" /> 

     <label className="label">Password</label>
     <input name='password' type="password" className="input" placeholder="Password" /> 


     <div><a className="link link-hover">Forgot password?</a></div>
     <button className="btn btn-neutral mt-4">Register</button> 

     <p className='text-center my-2'> Already  Have an Account ? Please <Link to='/auth/loing' className='text-blue-500 underline font-bold'>Login</Link></p>
   </form>
 </div>
</div>
   </div>
    );
};

export default Register;