import React from 'react';
import Header from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard/DashboardPage';
import LoginPage from './login/LoginPage';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
