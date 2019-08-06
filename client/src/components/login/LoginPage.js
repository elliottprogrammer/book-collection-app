import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

function LoginPage() {
    return (
        <div className="container main-content">
            <div className="card login-card">
                <h2 className="h5 text-center mb-4">Please Login</h2>
                <i className="fas fa-user-circle" />
                <p id="profile-name" className="profile-name-card" />
                <LoginForm />
                <Link className="forgot-password" to="/">
                    Forgot password?
                </Link>
            </div>
        </div>
    );
}

export default LoginPage;
