import { Express } from 'express';
import api from './api';

class Routes {
    public static initialize(app: Express): void {
        app.use('/api', api);
    }
}

export default Routes;
