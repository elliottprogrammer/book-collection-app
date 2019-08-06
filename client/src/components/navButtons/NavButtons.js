import React from 'react';
import { withRouter, Link } from 'react-router-dom';

function NavButtons(props) {
    return (
        <section className="nav-buttons-wrapper">
            <div className="container">
                <nav className="nav-buttons">
                    <Link className="btn btn-lg btn-info" to="/">
                        <i className="fas fa-search" /> MY BOOKS
                    </Link>
                    <Link className="btn btn-lg btn-primary" to="/google-book-search">
                        <i className="fas fa-search" /> Google Book Search
                    </Link>
                    <Link className="btn btn-lg btn-success" to="/add-book">
                        <i className="fas fa-plus-circle" /> ADD NEW BOOK
                    </Link>
                </nav>
            </div>
        </section>
    );
}

export default withRouter(NavButtons);
