import React, { use } from 'react';
import { AuthContext } from './contexts/AuthContext';

const Profile = () => {
    const {user}=use(AuthContext);
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">
                        {
                            user.email
                        }
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;