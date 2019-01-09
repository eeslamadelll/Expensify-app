import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {addExpense, removeExpense, editExpense,startEditExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses';
import expenses from '../fixture/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = 'fakeid';
const defaultAuthState = { auth: { uid } };

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('should test remove and return an object', () => {
    const action = removeExpense({id: '123123'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123123'
    });
});

test('should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startRemoveExpense({ id: 1 })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: 1
        });
        return database.ref(`users/${uid}/expenses/1`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    })
});

test('should test update expense and return an object', () => {
    const action = editExpense('123123', {description: 'something', note: 'some'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123123',
        updates: {description: 'something', note: 'some'}
    });
});

test('should update expense in firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startEditExpense(1, {description: 'something'})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: 1,
            updates: {
                description: 'something'
            }
        });
        return database.ref(`users/${uid}/expenses/1`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().description).toBe('something');
        done();
    })
})

// test('should test add expense and return an object with defaults', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: { description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     });
// });

test('should test add expense and return an object with data', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expenses to database and redux store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Pen',
        amount: 300,
        note: 'New one',
        createdAt: 12535550
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add default expenses to database and redux store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should test set expenses and return an object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should test startSetExpense and fetch data from firebase test DB', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});