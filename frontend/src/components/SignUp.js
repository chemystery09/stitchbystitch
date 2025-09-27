import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import '../styles/Login.css';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleCreateUser = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="login-container">
            <div className="form">
                <h1 className='title'>Welcome in!</h1>
                <h2 className='subtitle'>Sign up</h2>
                <form onSubmit={handleCreateUser} className="login-form">
                    <div className="form-group">
                        <div className="label">Email:</div>
                        <div className='input'><input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
                    </div>
                    <div className="form-group">
                        <div className="label">Name:</div>
                        <div className='input'><input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} required /></div>
                    </div>
                    <div className="form-group">
                        <div className="label">Password:</div>
                        <div className='input'><input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required /></div>
                    </div>
                                        <div className="form-group">
                        <div className="label">Confirm Password:</div>
                        <div className='input'><input type='password' id='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required /></div>
                    </div>
                    <button type='submit' className="button">Sign up</button>
                </form>
                <div className="footer">
                    <p>Already have an account? <a href="/login">Log in</a></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;