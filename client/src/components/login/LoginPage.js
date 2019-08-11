import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

function LoginPage() {
    return (
        <div className="container main-content">
            <div className="card login-card mb-5">
                <h2 className="h5 text-center mb-4">Please Login</h2>
                <i className="fas fa-user-circle" />
                <p id="profile-name" className="profile-name-card" />
                <LoginForm />
                <Link className="forgot-password" to="/">
                    Forgot password?
                </Link>
            </div>
            <div
                className="text-center mt50"
                style={{ fontWeight: '400', maxWidth: '380px', margin: '50px auto 0' }}
            >
                <h4>This is only a Demo!</h4>
                <p>Login to explore the demo.</p>
                <p style={{ fontSize: '20px' }}>
                    <strong>Use the following credentials:</strong>
                </p>
                <p>
                    <small>
                        <strong>Email:</strong>
                    </small>{' '}
                    <em>guestuser@mail.com</em>
                    <br />
                    <small>
                        <strong>Password:</strong>
                    </small>{' '}
                    <em>123456</em>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
