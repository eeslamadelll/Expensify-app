import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';


export const ExpensesSummary = ({expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount > 1 ? 'expenses' : 'expense';
    return(
        <div className="page-header">
            <div className="content-container">
                <p>you have <span>{expenseCount}</span> {expenseWord} with total of <span>{numeral(expenseTotal / 100).format('$0,0.00')}</span></p>
                <Link className="add" to="/add">Add Expense</Link>
            </div>
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