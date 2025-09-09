import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../shared/models/http-status-code.model";
import { responseSender } from "../shared/responseSender";
import type { IUser } from '@auction/shared';
import AppError from "../core/handler/appErrorHandler";

const prisma = new PrismaClient();
const userSchema = prisma.user;

const defaultUser = {
    name: "Ned Doe",
    email: "ned.doe@example.com",
    password: "SecurePass123!",
    contactNumber: "+1-202-555-0174",
    profileImage: "https://example.com/profiles/john-doe.png",
    role: "buyer",
    status: "active",
    createdAt: "2025-09-01T10:15:00.000Z",
}

class UserController {

    static async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const userDetails = req.body || defaultUser;
            if (!userDetails.name || !userDetails.email) {
                throw new AppError("Name and Email are required", HttpStatus.BAD_REQUEST);
            }
            const user = await userSchema.create({
                data: { ...userDetails }
            });
            responseSender(res, HttpStatus.CREATED, 'Created', user)
        } catch (error) {
            next(error);
        }
    }

    static async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users: IUser[] | unknown = await userSchema.findMany();
            if (!users) {
                throw new AppError('No Users Found', HttpStatus.NOT_FOUND);
            }
            responseSender(res, HttpStatus.OK, 'Success', users)
        } catch (error) {
            next(error);
        }
    }

    static async getUserById(req: Request, res: Response, next: NextFunction) {
        try {
            const userId: string = req.params.id;
            const user: IUser | unknown = await userSchema.findUnique({
                where: {
                    id: userId
                }
            });
            if (!user) {
                throw new AppError('No user found with given id', HttpStatus.NOT_FOUND);
            }
            responseSender(res, HttpStatus.OK, 'Success', user)
        } catch (error) {
            next(error);
        }
    }

    static async getUserStats(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId } = req.params;
            let stats = {
                bidPlaced: 0,
                auctionsWon: 0,
                totalSpent: 0,
                activeBids: 0
            }

            const auctionsWon = await prisma.auction.findMany({
                where: {
                    winnerId: userId
                }
            });
            stats.auctionsWon = auctionsWon?.length;

            const totalBids = await prisma.bid.findMany({
                where: {
                    buyerId: userId
                }
            });
            stats.bidPlaced = totalBids?.length;

            responseSender(res, HttpStatus.OK, 'Success', stats);
        } catch (error) {

        }
    }
}

export default UserController;