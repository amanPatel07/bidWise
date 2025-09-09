import type { IAuction } from "./auction.model";

export interface IUser {
    id: string;
    name: string;
    email: string;
    contactNumber: string;
    profileImage: string;
    role: string
    status: string;
    createdAt: Date
    updatedAt: Date;
    lastLoginAt: Date
    failedLoginAttempts: number
    Auction?: IAuction[];
    Bid?: any;
}