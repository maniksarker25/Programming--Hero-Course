import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    //
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // 
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    //
    const signInGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    //
    const logOut = ()=>{
        return signOut(auth)
    }
    // observe auth state change
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
            console.log('auth state change',currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInGoogle,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;