import database from '../firebase/firebase';

// creating an action generator for the add expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {description = '', note = '', amount = 0, createdAt = 0} = expenseData;
        const expense = {description, note, amount, createdAt};
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        }).catch((e) => {
            console.log('Error: ', e);
        });
    };
};

// creating an action generator for the remove expense
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove(() => {
            dispatch(removeExpense({ id }));
        });
    }
}

// creating an action generator for the edit expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// creating an action generator for the set expenses
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

// creating the async startSetExpenses action to fetch from firebase DB
export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    }
}