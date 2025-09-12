import type { IUser } from '@auction/shared';
import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import AppError from '../core/handler/appErrorHandler';
import UserRepository from '../core/queries/userRepository';
import UserService from '../services/user.service';
import { HttpStatus } from '../shared/models/http-status-code.model';
import { responseSender } from '../shared/responseSender';

const prisma = new PrismaClient();
const userSchema = prisma.user;

const defaultUser = {
    name: 'Ned Doe',
    email: 'ned.doe@example.com',
    password: 'SecurePass123!',
    contactNumber: '+1-202-555-0174',
    profileImage: 'https://example.com/profiles/john-doe.png',
    role: 'buyer',
    status: 'active',
    createdAt: '2025-09-01T10:15:00.000Z',
};

class UserController {
    static async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const userDetails = req.body || defaultUser;
            if (!userDetails.name || !userDetails.email) {
                throw new AppError('Name and Email are required', HttpStatus.BAD_REQUEST);
            }
            const user = await UserRepository.createUser({
                data: { ...userDetails },
            });
            responseSender(res, HttpStatus.CREATED, 'Created', user);
        } catch (error) {
            next(error);
        }
    }

    static async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users: IUser[] | unknown = await UserRepository.findMany({});
            if (!users) {
                throw new AppError('No Users Found', HttpStatus.NOT_FOUND);
            }
            responseSender(res, HttpStatus.OK, 'Success', users);
        } catch (error) {
            next(error);
        }
    }

    static async getUserById(req: Request, res: Response, next: NextFunction) {
        try {
            const userId: string = req.params.id;
            const user: IUser | unknown = await UserRepository.findById(userId);
            if (!user) {
                throw new AppError('No user found with given id', HttpStatus.NOT_FOUND);
            }
            responseSender(res, HttpStatus.OK, 'Success', user);
        } catch (error) {
            next(error);
        }
    }

    static async getUserStats(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const stats = await UserService.getUserStats(id);
            responseSender(res, HttpStatus.OK, 'Success', stats);
        } catch (error) {
            next(error);
        }
    }
}

export default UserController;
