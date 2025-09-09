import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../shared/models/http-status-code.model";
import { responseSender } from "../shared/responseSender";

const prisma = new PrismaClient();
const auctionSchema = prisma.auction;
const bidSchema = prisma.bid;

class BidController {
    static async placeBid(req: Request, res: Response, next: NextFunction) {
        try {
            const { auctionId } = req.params;
            const { amount, userId } = req.body;

            const { bid } = await prisma.$transaction(async (tx) => {
                const auction = await tx.auction.findUnique({
                    where: {
                        id: auctionId
                    }
                });

                if (!auction) {
                    const err = new Error('Auction not found');
                    (err as any).statusCode = HttpStatus.NOT_FOUND;
                    throw err;
                }

                const now = new Date();
                if (auction.status !== "ACTIVE" || now < auction.startTime || now > auction.endTime) {
                    const err = new Error('Auction is not open for bidding');
                    (err as any).statusCode = HttpStatus.BAD_REQUEST;
                    throw err;
                }

                // Find highest bid
                const highestBid = await tx.bid.findFirst({
                    where: { auctionId },
                    orderBy: { amount: 'desc' }
                });

                const minBid = highestBid?.amount ?? auction.startingPrice;
                if (amount <= minBid) {
                    const err = new Error(`Bid must be higher than ${minBid}`);
                    (err as any).statusCode = HttpStatus.BAD_REQUEST;
                    throw err;
                }

                const bid = await tx.bid.create({
                    data: {
                        amount,
                        auctionId,
                        buyerId: userId
                    }
                });

                await tx.auction.update({
                    where: { id: auctionId },
                    data: { currentPrice: amount }
                });
                return { bid };
            });

            responseSender(res, HttpStatus.CREATED, 'Bid placed Successfully', bid);
        } catch (error) {
            next(error);
        }
    }

    static async getAllBids(req: Request, res: Response, next: NextFunction) {
        try {
            const { auctionId } = req.params;
            const bids = await bidSchema.findMany({
                where: {
                    auctionId
                }
            });
            if (!bids) {
                const error = new Error('No bids found');
                (error as any).statusCode = HttpStatus.NOT_FOUND;
                throw error;
            }
            responseSender(res, HttpStatus.FOUND, 'Success', bids);
        } catch (error) {
            next(error);
        }
    }
}

export default BidController;
