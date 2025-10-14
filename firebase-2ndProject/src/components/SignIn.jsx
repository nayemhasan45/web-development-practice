import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from './contexts/AuthContext';

const SignIn = () => {
    // using the context 
    const {signInUser}=use(AuthContext);

    // event handler on form submit 
    const handleSignIn=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password= e.target.password.value;
        
        // log in with context 
        signInUser(email,password)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    return (
        <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl text-center p-5 font-bold">Login now!</h1>
            <div className="card-body">
                <form onSubmit={handleSignIn} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>Don't have Account yet! <Link className='text-blue-500 underline' to={'/signUp'}>Create One</Link></p>
            </div>
        </div>
    );
};

export default SignIn;