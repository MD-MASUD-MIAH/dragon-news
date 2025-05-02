import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../freabase/firebase.init';

const AuthProvider = ({children}) => {

const [user,setUser] = useState(null)
const [ loading,setLoading] = useState(true)
    const creatUser = (email,password)=>{

setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
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



    const  updateUser = (updataeData)=>{

setLoading(true)
        return updateProfile(auth.currentUser,updataeData)
    }





const logout = ()=>{

setLoading(true)
    return signOut(auth)
}

const login = (email,password)=>{
setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const userInfo = {


    creatUser,
    user,
    logout ,
    login,
    loading,
    updateUser,
    setUser,

}



    return <AuthContext value={userInfo}>

        {children}
    </AuthContext>


};

export default AuthProvider;