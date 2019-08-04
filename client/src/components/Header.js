import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/userActions';
import { Link } from 'react-router-dom';

class Header extends Component {
    handleLogout = e => {
        e.preventDefault();
        this.props.logoutUser();
        window.location.href = '/login';
    };

    render() {
        const { isAuthenticated, user } = this.props.user;
        return (
            <header className="topHeader bg-info">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                        <Link className="navbar-brand" to="/">
                            <i className="fas fa-book-reader" /> Laura's Book Collection
                        </Link>
                        {isAuthenticated && (
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <button
                                        className="btn btn-link nav-link"
                                        onClick={this.handleLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        )}
                    </nav>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Header);
