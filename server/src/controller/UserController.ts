import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../shared/models/http-status-code.model";
import { responseSender } from "../shared/responseSender";

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
            const users = await userSchema.findMany();
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
            const userId = req.body?.userId;
        } catch (error) {

        }
    }
}

export default UserController;