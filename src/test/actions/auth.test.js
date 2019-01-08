import { login, logout } from '../../actions/auth';

test('should test login', () => {
    const action = login('123789');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123789'
    });
});

test('should test logout', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});