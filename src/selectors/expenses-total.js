export default (expenses) => {
    if(expenses.length === 0){
        return 0;
    }else{
        const amountArray = expenses.map((expense) => expense.amount);
            return amountArray.reduce((sum, value) => {
                return sum + value;
            }, 0);
        }
}

// getExpensesTotal(expenses);