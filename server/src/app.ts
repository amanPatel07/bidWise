import express, { Express } from 'express';
import morgan from 'morgan';
import connectDatabase from './config/databaseConfig';
import setRoutes from './routes';
import { errorHandler } from './shared/errorHandler';
import Database from './config/databaseConfig';
import Routes from './routes';
import cors from 'cors';

class App {
    private app: Express;
    private port: number;

    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT) || 3000;
        this.connectToDatabase();
        this.configureCors();
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeErrorHandling();
    }

    private initializeMiddlewares(): void {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    private async connectToDatabase(): Promise<void> {
        const db = Database.getInstance();
        await db.connect();
    }

    private configureCors(): void {
        this.app.use(cors());
    }

    private initializeRoutes(): void {
        Routes.initialize(this.app);
    }

    private initializeErrorHandling(): void {
        this.app.use(errorHandler);
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${this.port}`)
        })
    }
}

const appInstance = new App();
appInstance.listen();