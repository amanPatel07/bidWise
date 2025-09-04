import { Auction } from "./auction.model";
import { IUser } from "./user.model";

export interface Bid {
    id: string;
    amount: number;
    created: Date;
    auctionId: string;
    auction: Auction;
    buyerId: string;
    buyer: IUser;
}