import { Auction_STATUS } from '@auction/shared';
import { PrismaClient } from '@prisma/client';
import cron from 'node-cron';

const prisma = new PrismaClient();

export const closeAuction = cron.schedule('* * * * *', async () => {
    console.log('⏳ Running auction closing job....');

    //TODO: Remove later
    const auctions = await prisma.auction.findMany({
        where: {
            startTime: {
                lte: new Date()
            },
            endTime: {
                gte: new Date()
            }
        }
    });
    for (const auction of auctions) {
        const updatedAuction = prisma.auction.update({
            where: {
                id: auction.id
            },
            data: { status: 'ACTIVE' }
        });
        console.log(updatedAuction)
    }

    const expiredAuction = await prisma.auction.findMany({
        where: {
            status: Auction_STATUS.ACTIVE,
            endTime: {
                lte: new Date()
            }
        },
        include: {
            bids: {
                orderBy: { amount: 'desc' },
                take: 1
            }
        }
    });

    for (const auction of expiredAuction) {
        const highestBid = auction.bids[0];
        let winner: string | null = null;
        if (highestBid && (!auction.reservePrice || highestBid.amount >= auction.reservePrice)) {
            winner = highestBid.buyerId;
        }
        await prisma.auction.update({
            where: {
                id: auction.id
            },
            data: {
                status: Auction_STATUS.CLOSED,
                winnerId: winner
            }
        });
    }

    console.log('expired auctions --->', expiredAuction);
});
