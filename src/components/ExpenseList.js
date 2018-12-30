import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
    	{
    		props.expenses.length === 0 ? (
    			<p>There is no expenses to show</p>
    		) : (
    			props.expenses.map((expense) => {
			        return <ExpenseListItem key={expense.id} {...expense}/>;
			    })
    		)
    	}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);


///////////////////// this code is right but we will use the best practice
// const ConnectExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses,
//         filters: state.filters
//     };
// })(ExpenseList);

// export default ConnectExpenseList;