import type { IUser } from './user.model';

export interface Auction {
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