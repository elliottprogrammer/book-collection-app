import React from 'react';
import Header from './header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavButtons from './navButtons/NavButtons';
import ProtectedRoute from './auth/ProtectedRoute';
import Dashboard from './dashboard/DashboardPage';
import LoginPage from './login/LoginPage';
import AddBookPage from './addBook/addBookPage';
import GoogleBookSearch from './googleBookSearch/GoogleBookSearchPage';

function App(props) {
    return (
        <BrowserRouter>
            <Header />
            {props.user.isAuthenticated && <NavButtons />}
            <Switch>
                <ProtectedRoute exact path="/" component={Dashboard} />
                <Route path="/login" component={LoginPage} />
                <ProtectedRoute path="/add-book" component={AddBookPage} />
                <ProtectedRoute path="/google-book-search" component={GoogleBookSearch} />
            </Switch>
        </BrowserRouter>
    );
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
    mapStateToProps,
    null
)(App);
