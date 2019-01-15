import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props) => {
    return (
        <header className="header">
            <div className="content-container">
                <div className="content">
                    <Link to="/dashboard" className="title"><h1>Expensify</h1></Link>
                    <button onClick={props.startLogout}>Logout</button>
                </div>
            </div>
        </header>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => dispatch(startLogout())
    }
}

export default connect(undefined, mapDispatchToProps)(Header);