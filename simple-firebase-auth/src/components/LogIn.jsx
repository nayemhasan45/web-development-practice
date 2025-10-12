import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { Link } from 'react-router';

const LogIn = () => {
    const [errorMsj, setErrorMsj] = useState('');
    const [successMsj, setSuccessMsj] = useState('');
    const emailRef=useRef();

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // reset
        setErrorMsj('');
        setSuccessMsj('');
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                if (result.user.emailVerified === false) {
                    alert('please verify your email address');
                } else {
                    setSuccessMsj('login successful')
                    e.target.reset();
                }
            })
            .catch(e => {
                // console.log(e);
                setErrorMsj(e.message);
            })
    }
    const handleForgetPassword=()=>{
        sendPasswordResetEmail(auth,emailRef.current.value)
        .then(()=>{
            alert('please check your email');
        })
        .catch(e=>{
            console.log(e.message);
        })
        // console.log(emailRef.current.value);
    }

    return (
        <div>
            <div className="hero bg-red-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" ref={emailRef} placeholder="Email" />
                                <label className="label">Password</label>
                                <input name='password' type="password"  className="input" placeholder="Password" />
                                <div><a onClick={handleForgetPassword}  className="link link-hover">Forgot password?</a></div>
                                <input className='btn' type="submit" value="Submit" />
                            </form>
                            {
                                errorMsj && <p className='text-red-500'>{errorMsj}</p>
                            }
                            {
                                successMsj && <p className='text-green-500'>{successMsj}</p>
                            }
                            <p>New to this page please <Link className='text-blue-500 border-b' to={'/register'}>Register</Link> </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LogIn;