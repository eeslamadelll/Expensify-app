import expensesReducer from '../../reducers/expenses';
import expenses from '../fixture/expenses';
import moment from 'moment';

test('Should set up default expenses', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should Remove expense with a valid id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('Should Remove expense with an invalid id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add an item', () => {
    const expense = {
        id: '4',
        description: 'Botato',
        note: '',
        amount: 15950,
        createdAt: moment(0).subtract(2, 'days').valueOf()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('Should edit an iten', () => {
    const amount = 11111;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('Should edit an iten', () => {
    const amount = 11111;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});