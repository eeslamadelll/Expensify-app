import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should test and setup default values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SET_SORTBY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
    const currentState = {text: '', sortBy: 'amount', startDate: undefined, endDate: undefined};
    const action = { type: 'SET_SORTBY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('Should set text to something', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'something'
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('something');
});

test('Should set startDate to any date', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };

    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(startDate);
});

test('Should set startDate to any date', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };

    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(endDate);
});