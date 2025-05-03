import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile,signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { auth } from '../freabase/firebase.init';


const AuthProvider = ({children}) => {
    const [breaking,setbraking] = useState([])
    const [user,setUser] = useState(null)
    const [ loading,setLoading] = useState(true)
    
   const provider = new GithubAuthProvider()

    const creatUser = (email,password)=>{

setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    } 


 const forgetPass =(email)=>{

    return sendPasswordResetEmail(auth,email)


 }

    useEffect(()=>{


        const unsusribe = onAuthStateChanged(auth,(Currentuser)=>{


        setUser(Currentuser)
setLoading(false)
        
        }) 

        return ()=>{

            unsusribe()
        }
    },[])


    const loginGithub =()=>{

setLoading(true) 
return signInWithPopup(auth,provider)

    }

    const  updateUser = (updataeData)=>{

setLoading(true)
        return updateProfile(auth.currentUser,updataeData)
    }


const dataBraking =(news)=>{


    setbraking(news)
}


const logout = ()=>{

setLoading(true)
    return signOut(auth)
}


const googleLongin =(provider)=>{


    setLoading(true)
return signInWithPopup(auth,provider)

}



const login = (email,password)=>{
setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

console.log(user);

const userInfo = {


    creatUser,
    user,
    logout ,
    login,
    loading,
    updateUser,
    setUser,
    dataBraking,
    breaking,
    forgetPass,
    googleLongin,
    loginGithub,

}



    return <AuthContext value={userInfo}>

        {children}
    </AuthContext>


};

export default AuthProvider;