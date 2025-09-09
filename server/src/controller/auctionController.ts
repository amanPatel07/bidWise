import { AuctionStatus, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../shared/models/http-status-code.model";
import { responseSender } from "../shared/responseSender";

const prisma = new PrismaClient();
const auctionSchema = prisma.auction;

class AuctionController {

    static async createAuction(req: Request, res: Response, next: NextFunction) {
        try {
            const auctionDetails = req.body.auctionDetails;
            const auction = await auctionSchema.create({
                data: { ...auctionDetails }
            });
            if (!auction) {
                const err = new Error('Something went wrong while creating auction');
                (err as any).statusCode = HttpStatus.NOT_MODIFIED;
                throw err;
            }
            responseSender(res, HttpStatus.CREATED, 'Success', auction);
        } catch (error) {
            next(error);
        }
    }

    static async getAuctionById(req: Request, res: Response, next: NextFunction) {
        try {
            const auctionId: string = req.params.id;
            const auction = await auctionSchema.findUnique({
                where: {
                    id: auctionId
                }
            });
            if (!auction) {
                const err = new Error('No user found with given id');
                (err as any).statusCode = HttpStatus.NOT_FOUND;
                throw err;
            }
            responseSender(res, HttpStatus.FOUND, 'Success', auction)
        } catch (error) {
            next(error);
        }
    }

    static async getAllAuction(req: Request, res: Response, next: NextFunction) {
        try {
            const { status } = req.query;
            let whereClause = {};
            if (typeof status === 'string' && Object.values(AuctionStatus).includes(status as AuctionStatus)) {
                whereClause = { status: status as AuctionStatus};
            }
            const auctions = await auctionSchema.findMany({
                where: whereClause
            });
            if (!auctions) {
                const err = new Error('No auction found with given id');
                (err as any).statusCode = HttpStatus.NOT_FOUND;
                throw err;
            }
            responseSender(res, HttpStatus.OK, 'Success', auctions);
        } catch (error) {
            next(error);
        }
    }

    static async deleteAuction(req: Request, res: Response, next: NextFunction) {
        try {
            const auctionId: string = req.params.id;
            const auction = await auctionSchema.delete({
                where: {
                    id: auctionId
                }
            });
            if (!auction) {
                const err = new Error('No auction found with given id');
                (err as any).statusCode = HttpStatus.NOT_FOUND;
                throw err;
            }
            responseSender(res, HttpStatus.OK, 'Deleted', {});
        } catch (error) {
            next(error);
        }
    }

    static async updateAuction(req: Request, res: Response, next: NextFunction) {
        try {
            const auctionId: string = req.params.id;
            const auctionDataToUpdate: any = req.body;
            const updatedAuction = await auctionSchema.update({
                where: { id: auctionId },
                data: { ...auctionDataToUpdate }
            });
            if (!updatedAuction) {
                const err = new Error('Auction not updated');
                (err as any).statusCode = HttpStatus.NOT_MODIFIED;
                throw err;
            }
            responseSender(res, HttpStatus.OK, 'Updated', updatedAuction);
        } catch (error) {
            next(error);
        }
    }
}

export default AuctionController;
