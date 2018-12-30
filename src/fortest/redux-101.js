import { createStore } from 'redux';

/*
// before destructing object as a parameter
const add = (data) => {
    return data.a + data.b;
}

console.log(add( {a: 1, b: 1} ));
*/

/*
// after destructing object as a parameter
const adding = ( {a, b} ) => {
    return a + b;
}

console.log(adding({a: 1, b: 1}));
*/

const incrementCount = ({incrementedBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementedBy
});

const decrementCount = ({decrementedBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementedBy
});

const resetCount = ({resetTo = 0} = {}) => ({
    type: 'RESET',
    resetTo
});


//Reducer conditions
// 1- Reducers are pure functions: it can't interact with something outside it's scope
// 2- Reducers never change app's state or action.

const countReducer = (state = {count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT':            
            return {
                count: state.count + action.incrementedBy
            }
        case 'RESET':
            return{
                count:  0 + action.resetTo
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementedBy
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementedBy : 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementedBy : 10}));

store.dispatch(resetCount({ resetTo : 20 }));