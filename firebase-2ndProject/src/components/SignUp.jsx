import React from 'react';
import { Link } from 'react-router';

const SignUp = () => {
    const handleSignUp=e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email= e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password);
    }
    return (
        <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl text-center p-5 font-bold">Sign Up now!</h1>
            <div className="card-body">
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <input className='btn' type="submit" value="Submit" />
                </form>
                <p>Already have an Account please    <Link className='text-blue-500 underline' to={'/signIn'}>log in</Link></p>
            </div>
        </div>
    );
};

export default SignUp;