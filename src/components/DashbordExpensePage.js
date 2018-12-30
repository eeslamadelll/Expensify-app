import React from 'react';
import ExpenseList from './ExpenseList'; // data comes from HOC
import ExpenseListFilters from './ExpenseListFilters';

const DashbordExpensePage = () => {
    return (
        <div>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
}

export default DashbordExpensePage;