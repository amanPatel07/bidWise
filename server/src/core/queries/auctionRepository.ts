import { prismaClient } from "../prismaClient/prismaClient";

const auctionSchema = prismaClient.auction;

class AuctionRepository {
    static async findMany(params: any) {
        return auctionSchema.findMany(params);
    }
}

export default AuctionRepository;