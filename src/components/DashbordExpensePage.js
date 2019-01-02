import React from 'react';
import ExpenseList from './ExpenseList'; // data comes from HOC
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const DashbordExpensePage = () => {
    return (
        <div>
            <ExpensesSummary />
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
}

export default DashbordExpensePage;