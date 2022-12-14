import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop'


    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form >
                    <input type="email" name="" id="" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />

                </form>
                <p>new to ema-john? <Link to="/register">Create an Account</Link></p>
                <div>--------------or---------------</div>
                <button
                    className='btn-regular'
                    onClick={handleGoogleLogIn}
                >Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;