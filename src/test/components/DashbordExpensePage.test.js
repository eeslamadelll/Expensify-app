import React from 'react';
import { shallow } from 'enzyme';
import DashbordExpensePage from '../../components/DashbordExpensePage';

test('should render the Dashbord page', () => {
	const wrapper = shallow(<DashbordExpensePage />);
	expect(wrapper).toMatchSnapshot();
});