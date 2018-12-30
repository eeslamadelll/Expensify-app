import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixture/expenses';

test('Should Render AddExpensePage correctly', () => {
    const addExpense = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
    expect(wrapper).toMatchSnapshot();
});

test('Should handle on submit', () => {
    const addExpense = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
    wrapper.find('AddExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
});