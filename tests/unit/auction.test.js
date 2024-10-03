const { createAuction, getAuctionById, placeBid, getBidsForAuction } = require('../../src/auction');

describe('Auction Tests', () => {
    beforeEach(() => {
        this.auctions = [];
        this.bids = [];
    });

    test('should create a new auction', () => {
        const auction = { id: 1, name: 'Leilão de arte', startingPrice: 100 };
        createAuction(auction);
        expect(getAuctionById(1)).toEqual(auction);
    });

    test('should throw an error when placing a bid below starting price', () => {
        createAuction({ id: 1, name: 'Leilão de arte', startingPrice: 100 });
        expect(() => {
            placeBid(1, 2, 50);
        }).toThrow('O valor do lance deve ser maior do que o preço inicial.');
    });

    test('should return bids for a given auction', () => {
        createAuction({ id: 1, name: 'Leilão de arte', startingPrice: 100 });
        placeBid(1, 2, 120);
        const bids = getBidsForAuction(1);
        expect(bids.length).toBe(1);
        expect(bids[0]).toEqual({ auctionId: 1, userId: 2, amount: 120 });
    });
});
