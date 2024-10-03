const { addUser, getUserById } = require('../../src/user');
const { createAuction, placeBid, getBidsForAuction } = require('../../src/auction');

describe('Integration Tests', () => {
    test('user should be able to create an auction and place bids', () => {
        const user = { id: 1, name: 'Alice' };
        addUser(user);
        createAuction({ id: 1, name: 'Leilão de arte', startingPrice: 100 });

        placeBid(1, 1, 150);

        const bids = getBidsForAuction(1);
        expect(bids.length).toBe(1);
        expect(bids[0]).toEqual({ auctionId: 1, userId: 1, amount: 150 });
    });

    test('should not allow bid if auction does not exist', () => {
        expect(() => {
            placeBid(999, 1, 150);
        }).toThrow('Leilão não encontrado.');
    });
});
