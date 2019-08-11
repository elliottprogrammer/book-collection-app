import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from '../../actions/userActions';

class LoginForm extends Component {
    state = {
        email: 'guestuser@mail.com',
        password: '123456',
        errors: {},
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.isAuthenticated) {
            this.props.history.push('/');
        }
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        this.setState({ errors: {} });

        const userData = {
            email: this.state.email,
            password: this.state.password,
        };

        this.props.loginUser(userData);
    };

    render() {
        const { email, password, errors } = this.state;
        return (
            <form className="form-signin" onSubmit={this.onSubmit} noValidate>
                <div className="form-group mb-4">
                    <input
                        type="email"
                        name="email"
                        className={classnames('form-control', { 'is-invalid': errors.email })}
                        placeholder="Email address"
                        onChange={this.onInputChange}
                        value={email}
                        required
                        autoFocus
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="form-group mb-4">
                    <input
                        type="password"
                        name="password"
                        className={classnames('form-control', { 'is-invalid': errors.password })}
                        placeholder="Password"
                        onChange={this.onInputChange}
                        value={password}
                        required
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                <button className="btn btn-lg btn-block btn-info mb-4" type="submit">
                    Sign in
                </button>
            </form>
        );
    }
}

LoginForm.propTypes = {
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapDispatchToProps = { loginUser };
const mapStateToProps = state => ({
    user: state.user,
    errors: state.errors,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(LoginForm));
