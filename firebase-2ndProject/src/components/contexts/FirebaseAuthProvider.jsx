import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase.init';

const FirebaseAuthProvider = ({children}) => {
    // save current user in a state 
    const [user,setUser]=useState();
    // creating user 
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // log in user 
    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // get current user 
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        })
        return()=>{
            unSubscribe();
        }
    },[])

    const userInfo={
        user,
        createUser,
        signInUser,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default FirebaseAuthProvider;