import React from 'react';
import Header from './header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavButtons from './navButtons/NavButtons';
import Dashboard from './dashboard/DashboardPage';
import LoginPage from './login/LoginPage';
import AddBookPage from './addBook/addBookPage';
import GoogleBookSearch from './googleBookSearch/GoogleBookSearchPage';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <NavButtons />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/login" component={LoginPage} />
                <Route path="/add-book" component={AddBookPage} />
                <Route path="/google-book-search" component={GoogleBookSearch} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
