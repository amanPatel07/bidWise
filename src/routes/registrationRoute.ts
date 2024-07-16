import { Router } from 'express';
import registrationController from '../controllers/registrationController';

const registrationRouter = Router();

registrationRouter
  .route('/register')
  .post(registrationController);

export default registrationRouter;