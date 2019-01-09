import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props) => {
    return (
        <header>
            <h1>Expensify</h1>
            <nav>
                <ul>
                    <li><NavLink to="/dashboard" activeClassName="is-active">Homepage</NavLink></li>
                    <li><NavLink to="/add" activeClassName="is-active">Add Expense</NavLink></li>
                </ul>
                <button onClick={props.startLogout}>Logout</button>
            </nav>
        </header>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => dispatch(startLogout())
    }
}

export default connect(undefined, mapDispatchToProps)(Header);