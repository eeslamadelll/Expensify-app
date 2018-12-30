import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// creating an action generator for the add expense
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// creating an action generator for the remove expense
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// creating an action generator for the edit expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// creating an action generator for the text filter
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// creating an action generator for the text filter
const setSortbyAmount = () => ({
    type: 'SET_SORTBY_AMOUNT'
});

const setSortbyDate = () => ({
    type: 'SET_SORTBY_DATE'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

// creating the expenses reducer
const defaultExpenseState = [];
const expensesReducer = (state = defaultExpenseState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter( (expense) => expense.id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return{
                        ...expense,
                        ...action.updates
                    };
                }else{
                    return expense;
                }
            });
        default:
            return state;
    }
}

// creating the filters reducers
const defaultFiltersState = {text: '', sortBy: 'date', startDate: undefined, endDate: undefined};
const filtersReducer = (state = defaultFiltersState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SET_SORTBY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_SORTBY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

// the store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        // console.log(startDate, endDate);
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        // console.log(startDate, endDate);
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'RENT', amount: 100, createdAt: -11000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'SOME', amount: 200, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 })); // returns object with amount updates

// store.dispatch(setTextFilter('so')); /////////////////
// store.dispatch(setTextFilter());

store.dispatch(setSortbyAmount());
// store.dispatch(setSortbyDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(2000));
// store.dispatch(setEndDate());

// const demoState = {
//     expenses: [{
//         id: 'sdfred',
//         description: 'Rent',
//         note: 'This is the rent expense for January',
//         amount: 23400,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', // date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };