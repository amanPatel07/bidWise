import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const userSchema = prisma.user;

class UserQuery {
    public static async findMany(query?: any) {
        return await userSchema.findMany(query);
    }
}

export default UserQuery;