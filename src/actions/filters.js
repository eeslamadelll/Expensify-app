// creating an action generator for the text filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// creating an action generator for the text filter
export const setSortbyAmount = () => ({
    type: 'SET_SORTBY_AMOUNT'
});

export const setSortbyDate = () => ({
    type: 'SET_SORTBY_DATE'
});

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
