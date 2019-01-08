import authReducer from '../../reducers/auth';

test('should test the default state for auth reducer', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
});

test('should test authReducer and set uid', () => {
    const state = authReducer({}, {type: 'LOGIN', uid: '123789'});
    expect(state.uid).toBe('123789');
});

test('should test authReducer and unset uid', () => {
    const state = authReducer({uid: '123789'}, {type: 'LOGOUT'});
    expect(state).toEqual({});
});