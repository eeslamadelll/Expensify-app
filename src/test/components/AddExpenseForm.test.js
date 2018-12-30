import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import AddExpenseForm from '../../components/AddExpenseForm';
import expenses from '../fixture/expenses';

test('Should render AddExpenseForm correctly with the default data', () => {
    const wrapper = shallow(<AddExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render AddExpenseForm correctly with data from fixture', () => {
    const wrapper = shallow(<AddExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render the error while invalid form submission', () => {
    const wrapper = shallow(<AddExpenseForm />);
    // before simulating the submit event handler
    expect(wrapper).toMatchSnapshot();
    // find is an enzyme func as well as simulate is
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    // state is an enzyme function
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change', () => {
    const wrapper = shallow(<AddExpenseForm />);
    const value = 'New Something';
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('Should set note on input change', () => {
    const wrapper = shallow(<AddExpenseForm />);
    const value = 'New Note';
    wrapper.find('textarea').simulate('change', {
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('Should set Amount on input change', () => {
    const wrapper = shallow(<AddExpenseForm />);
    const value = '22.50';
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('Should set Amount on input change for invalid value', () => {
    const wrapper = shallow(<AddExpenseForm />);
    const value = '22.505';
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
});

test('Should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<AddExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt,
    });
});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<AddExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<AddExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calenderFocused')).toBe(focused);
});