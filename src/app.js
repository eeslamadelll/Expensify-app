import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouters';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
const container = document.querySelector('.expensify');

ReactDOM.render(<p>Loading...</p>, container);
store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, container);
});

firebase.auth().onAuthStateChanged((user) => {
    user ? console.log('in') : console.log('out');
});