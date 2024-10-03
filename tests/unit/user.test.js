const { addUser, getUserById } = require('../../src/user');

describe('User Tests', () => {
    beforeEach(() => {
        this.users = [];
    });

    test('should add a new user', () => {
        const user = { id: 1, name: 'Alice' };
        addUser(user);
        expect(getUserById(1)).toEqual(user);
    });

    test('should return undefined for non-existent user', () => {
        expect(getUserById(999)).toBeUndefined();
    });
});
