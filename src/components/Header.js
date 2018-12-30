import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Expensify</h1>
            <nav>
                <ul>
                    <li><NavLink to="/" activeClassName="is-active" exact={true}>Homepage</NavLink></li>
                    <li><NavLink to="/add" activeClassName="is-active">Add Expense</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;