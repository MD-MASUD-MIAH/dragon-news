import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../freabase/firebase.init';

const AuthProvider = ({children}) => {

const [user,setUser] = useState(null)

    const creatUser = (email,password)=>{


        return createUserWithEmailAndPassword(auth,email,password)
    } 




    useEffect(()=>{


        const unsusribe = onAuthStateChanged(auth,(Currentuser)=>{


        setUser(Currentuser)

        
        }) 

        return ()=>{

            unsusribe()
        }
    },[])




const logout = ()=>{


    return signOut(auth)
}

const login = (email,password)=>{

    return signInWithEmailAndPassword(auth,email,password)
}
const userInfo = {


    creatUser,
    user,
    logout ,
    login

}



    return <AuthContext value={userInfo}>

        {children}
    </AuthContext>


};

export default AuthProvider;