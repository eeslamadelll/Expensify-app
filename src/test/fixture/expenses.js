import moment from 'moment';

export default [{
    id: '1',
    description: 'Banana',
    note: '',
    amount: 10950,
    createdAt: moment(0).subtract(3, 'days').valueOf()
}, {
    id: '2',
    description: 'Onion',
    note: '',
    amount: 12950,
    createdAt: 0
}, {
    id: '3',
    description: 'Carrot',
    note: '',
    amount: 14950,
    createdAt: moment(0).add(3, 'days').valueOf()
}];