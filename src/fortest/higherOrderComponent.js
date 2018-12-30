console.log('higherOrderComponent.js');


// this is a usual component not HOC...
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>My Info</h1>
        <p>some info : {props.info}</p>
    </div>
);

// now we will work on the HOC...
const withAdminWarning = (WrappedComponent) => {
    return (props)  => (  // here's the HOC
        <div>
            {props.isAdmin && <p>Warning From the Admin.</p>}
            <WrappedComponent {...props} /> { /* spread the props from WrappedComponent which will be Info*/}
        </div>
    );
};

const withAuthintication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthinticated ? <WrappedComponent {...props} /> : <p>Please Login</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuthintication(Info);
// notice that we render the admin info which is the HOC instead of rendering info
//ReactDOM.render(<AdminInfo isAdmin={true} info='details' />, document.querySelector('.expensify'));
ReactDOM.render(<AuthInfo isAuthinticated={false} info='details' />, document.querySelector('.expensify'));