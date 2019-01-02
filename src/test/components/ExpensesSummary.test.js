import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render the ExpenseSummary correct with one item', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={252} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render the ExpenseSummary correct with multiple items', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={43} expenseTotal={20524752} />);
    expect(wrapper).toMatchSnapshot();
});