import type { IAuction, IUser } from '@auction/shared';

export class UserInfo {
    id: string;
    name: string;
    email: string;
    contactNumber: string;
    profileImage: string;
    role: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    lastLoginAt: string;
    failedLoginAttempts: number;
    Auction?: IAuction[];
    Bid?: any;

    constructor(user: IUser) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.contactNumber = user.contactNumber;
        this.profileImage = user.profileImage;
        this.role = user.role;
        this.status = user.status;
        this.createdAt = new Date(user.createdAt)?.toISOString();
        this.updatedAt = new Date(user.updatedAt)?.toISOString();
        this.lastLoginAt = new Date(user.lastLoginAt)?.toISOString();
        this.failedLoginAttempts = user.failedLoginAttempts;
        this.Auction = user.Auction;
        this.Bid = user.Bid;
    }
}
