import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';


export const ExpensesSummary = ({expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount > 1 ? 'expenses' : 'expense';
    return(
        <div>
            {  <p>you have {expenseCount} {expenseWord} with total of {numeral(expenseTotal / 100).format('$0,0.00')}</p> }
        </div>
    );
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: getExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);