import AuctionRepository from "../core/queries/auctionRepository";
import BidRepository from "../core/queries/bidRepository";

class UserService {
    static async getUserStats(userId: string) {
        let stats = {
            bidPlaced: 0,
            auctionsWon: 0,
            totalSpent: 0,
            activeBids: 0
        };
        let totalSpent = 0;

        const auctionsWon = await AuctionRepository.findMany({
            where: {
                winnerId: userId
            }
        });
        stats.auctionsWon = auctionsWon?.length;

        auctionsWon.forEach(auction => {
            if (auction.currentPrice) {
                totalSpent = auction.currentPrice + totalSpent;
            }
        });
        stats.totalSpent = totalSpent;

        const totalBids = await BidRepository.findMany({
            where: {
                buyerId: userId
            }
        });
        stats.bidPlaced = totalBids?.length;

        const activeBids = await BidRepository.findMany({
            where: {
                buyerId: userId,
                auction: {
                    status: 'ACTIVE'
                }
            }
        });
        stats.activeBids = activeBids?.length;
        return stats;
    }
}

export default UserService;