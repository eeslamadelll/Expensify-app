import React from 'react';
import DashbordExpensePage from '../components/DashbordExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpExpensePage from '../components/HelpExpensePage';
import NotFoundExpensePage from '../components/NotFoundExpensePage';
import Header from '../components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from '../components/LoginPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/dashboard" component={DashbordExpensePage} />
                <Route path="/add" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpExpensePage} />
                <Route component={NotFoundExpensePage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;