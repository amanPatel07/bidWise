import { Router } from 'express';
import IndexController from '../controller/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app: Router) {
    app.get('/', indexController.home);
    app.get('/api/resource', indexController.getResource);
    app.post('/api/resource', indexController.createResource);
    app.put('/api/resource/:id', indexController.updateResource);
    app.delete('/api/resource/:id', indexController.deleteResource);
}