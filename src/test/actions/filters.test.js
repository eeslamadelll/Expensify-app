import moment from 'moment';
import { setTextFilter, setSortbyAmount, setSortbyDate, setStartDate, setEndDate} from '../../actions/filters';

test('setting up set text filters without any arguments', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('setting up set text filters without text to filter based on', () => {
    const action = setTextFilter('data');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'data'
    });
});

test('setting up set sort by amount action generator', () => {
    const action = setSortbyAmount();
    expect(action).toEqual({
        type: 'SET_SORTBY_AMOUNT'
    });
});

test('setting up set sort by date action generator', () => {
    const action = setSortbyDate();
    expect(action).toEqual({
        type: 'SET_SORTBY_DATE'
    });
});

test('setting up set start date action generator', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('setting up set end date action generator', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});