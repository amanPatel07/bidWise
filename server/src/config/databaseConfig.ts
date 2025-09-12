import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

class Database {
    private static instance: Database;
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: Number(process.env.DB_PORT),
        });
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public async connect(): Promise<void> {
        try {
            await this.pool.connect();
            console.log('Database connected successfully');
        } catch (error) {
            console.log('Database connection failed', error);
        }
    }
}

export default Database;
