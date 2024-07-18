import { Router } from 'express';
import registrationRouter from './registrationRoute';
import login from './login';

const route = Router();

route.use('/', registrationRouter);
route.use('/', login);

export default route;