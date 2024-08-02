import { Router } from 'express';
import dashboard from './dashboard.route';
import login from './login.route';
import registrationRouter from './registrationRoute';
import auction from './auction.route';

const route = Router();

route.use('/', registrationRouter);
route.use('/', login);
route.use('/', dashboard);
route.use('/', auction);

export default route;