import { useState } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../styles/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="login-container">
            <div className="form">
                <h1 className='title'>Welcome back!</h1>
                <h2 className='subtitle'>Log in</h2>
                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <div className="label">Email:</div>
                        <div className='input'><input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
                    </div>
                    <div className="form-group">
                        <div className="label">Password:</div>
                        <div className='input'><input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required /></div>
                    </div>
                    <button type='submit' className="button">Log In</button>
                </form>
                <div className="footer">
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                </div>
            </div>
        </div>
    );
}
export default Login;