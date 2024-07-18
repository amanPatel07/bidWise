import { Router } from 'express';
import RegistrationControl from '../controllers/registrationController';

const registrationRouter = Router();
const registrationControl = new RegistrationControl();

registrationRouter
  .route('/register')
  .post(registrationControl.createNewUser);

export default registrationRouter;