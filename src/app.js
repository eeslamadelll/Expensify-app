import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouters';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'WATER BILL', amount: 1000, createdAt: 11000 }));
store.dispatch(addExpense({ description: 'Rent',  createdAt: 3000, amount: 500 }));
store.dispatch(addExpense({ description: 'GAS BILL', amount: 100, createdAt: 101000 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
const container = document.querySelector('.expensify');
ReactDOM.render(jsx, container);