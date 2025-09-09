import type { IUser } from './user.model';

export interface IAuction {
    id: string;
    title: string;
    description: string;
    startingPrice: number;
    reservePrice: number;
    currentPrice: number;
    status: string;
    startTime: Date;
    endTime: Date;
    createdAT: Date;
    updatedAt: Date;
    sellerId: string;
    seller: IUser;
    bids?: any
}