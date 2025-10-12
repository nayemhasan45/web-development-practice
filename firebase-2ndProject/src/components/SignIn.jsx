import React from 'react';
import { Link } from 'react-router';

const SignIn = () => {
    return (
        <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl text-center p-5 font-bold">Login now!</h1>
            <div className="card-body">
                <form className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>Don't have Account yet! <Link className='text-blue-500 underline' to={'/signUp'}>Create One</Link></p>
            </div>
        </div>
    );
};

export default SignIn;