import {addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should test remove and return an object', () => {
    const action = removeExpense({id: '123123'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123123'
    });
});

test('should test update expense and return an object', () => {
    const action = editExpense('123123', {description: 'something', note: 'some'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123123',
        updates: {description: 'something', note: 'some'}
    });
});

test('should test add expense and return an object', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: { description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});

test('should test add expense and return an object', () => {
    const action = addExpense({ description: 'desc', note: 'note', amount: 34, createdAt: 33 });
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: { description: 'desc',
            note: 'note',
            amount: 34,
            createdAt: 33,
            id: expect.any(String)
        }
    });
});