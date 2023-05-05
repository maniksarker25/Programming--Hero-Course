import React, { createContext, useEffect, useState } from 'react';
export const authContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)

const AuthProvider = ({children}) => {
   const [user,setUser] = useState(null);
   const [loading,setLoading] = useState(true)

    // create user
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    // sign in
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    //logout
    const logOut = ()=>{
       return signOut(auth)
    }
    // observe user auth state -
    useEffect(()=>{
      const unsubscribe =   onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        // stop observing while unmounting
        return ()=>{
            return unsubscribe();
        }
    },[])

    //
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;