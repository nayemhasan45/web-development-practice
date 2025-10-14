import React from 'react';
import { AuthContext } from './AuthContext';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase.init';

const FirebaseAuthProvider = ({children}) => {
    // creating user 
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // sign in user 
    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const userInfo={
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