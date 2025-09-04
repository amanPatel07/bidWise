import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../shared/models/http-status-code.model";
import { responseSender } from "../shared/responseSender";
import type { IUser } from '@auction/shared';

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
                const err = new Error("Name and Email are required");
                (err as any).statusCode = HttpStatus.BAD_REQUEST;
                throw err;
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
                const err = new Error('No Users Found');
                (err as any).statusCode = HttpStatus.NOT_FOUND;
                throw err;
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
                const err = new Error('No user found with given id');
                (err as any).statusCode = HttpStatus.NOT_FOUND;
                throw err;
            }
            responseSender(res, HttpStatus.FOUND, 'Success', user)
        } catch (error) {
            next(error);
        }
    }
}

export default UserController;