import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = (props) => {
    return (
        <div className="login">
            <div className="overlay"></div>
            <div className="container">
                <h1>Expensify App</h1>
                <p>It's time to put your expenses under control</p>
                <button onClick={props.startLogin}>Login with Google</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage);