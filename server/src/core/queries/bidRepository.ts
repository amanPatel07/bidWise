import { prismaClient } from '../prismaClient/prismaClient';

const bidSchema = prismaClient.bid;

class BidRepository {
    static async findMany(params: any) {
        return bidSchema.findMany(params);
    }
}

export default BidRepository;
