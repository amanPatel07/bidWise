import { prismaClient } from "../prismaClient/prismaClient";

const userSchema = prismaClient.user;

class UserRepository {

    static async findById(id: string) {
        return await userSchema.findUnique({ where: { id } });
    }

    static async findMany(params?: any) {
        return await userSchema.findMany(params);
    }

    static async createUser(detail: any) {
        return await userSchema.create({ ...detail })
    }
}

export default UserRepository;