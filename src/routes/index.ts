import {Router} from 'express';
import registrationRouter from './registrationRoute';

const route = Router();

route.use('/', registrationRouter);

export default route;