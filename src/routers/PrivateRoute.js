import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';

// props here carries all the props from the component where we will render PrivateRoute
// So, based on the is authinticated value we will render those components

export const PrivateRoute = ({ isAuthinticated, component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) => {
            return (
                isAuthinticated ? (
                    <div>
                        <Header />
                        <Component {...props} />
                    </div>
                ) : (
                    <Redirect to="/" />
                )
            )
        }} />
    );
}

const mapStateToProps = (state) => {
    return{
        isAuthinticated: !!state.auth.uid
    }
}

export default connect(mapStateToProps)(PrivateRoute);