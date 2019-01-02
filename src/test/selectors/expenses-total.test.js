import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixture/expenses';

test('should return 0 if there is no expenses', () => {
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test('should return only one amount in case the array with one ele', () => {
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toBe(10950);
});

test('should return all expenses', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(38850);
});