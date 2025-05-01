import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
const {login} = use(AuthContext)

  const handleLogin = (e)=>{

     e.preventDefault() 

     const form = e.target 

     const email = form.email.value 

     const password = form.password.value  


     console.log({email,password});
     
login(email,password).then(result=>{

  console.log(result);
  
}).catch(error=>{

  console.log(error);
  
})

   
  }
    return (
        <div className='flex items-center justify-center min-h-screen'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"> 

                <h1 className='text-center pt-8
                 text-2xl font-bold  '>Login your account</h1>
      <div className="card-body ">
        <form onSubmit={handleLogin} className="fieldset border-t border-base-200 pt-6 py-4">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button> 

          <p className='text-center my-2'>Don't Have an Account ? Please <Link to='/auth/register' className='text-blue-500 underline font-bold'>Register</Link></p>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Login;