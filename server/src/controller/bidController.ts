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

            const auction = await auctionSchema.findUnique({
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

            const minBid = auction.currentPrice ?? auction.startingPrice;
            if (amount <= minBid) {
                const err = new Error(`Bid must be higher than ${minBid}`);
                (err as any).statusCode = HttpStatus.BAD_REQUEST;
                throw err;
            }

            const bid = await bidSchema.create({
                data: {
                    amount,
                    auctionId,
                    buyerId: userId
                }
            });

            await auctionSchema.update({
                where: { id: auctionId },
                data: { currentPrice: amount }
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
