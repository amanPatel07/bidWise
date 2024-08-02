import { Router } from 'express';
import dashboard from './dashboard.route';
import login from './login.route';
import registrationRouter from './registrationRoute';
import auction from './auction.route';
import bidRouter from './bid.router';

const route = Router();

route.use('/', registrationRouter);
route.use('/', login);
route.use('/', dashboard);
route.use('/', auction);
route.use('/', bidRouter);

export default route;