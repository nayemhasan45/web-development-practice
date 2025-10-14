import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

    // log out user 
    const signOutUser = ()=>{
        return signOut(auth)
    }

    // get current user and set observer 
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
        signOutUser,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default FirebaseAuthProvider;