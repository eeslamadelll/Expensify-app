import moment from 'moment';

// get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true; // if start date is the same or before the creation of the expense
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true; // if end date is the same or after the creation of the expense
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
}