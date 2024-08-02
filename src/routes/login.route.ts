import { Router } from "express";
import Login from "../controllers/login";

const router = Router();
const loginController = new Login();

router
  .route('/login')
  .post(loginController.login);

export default router;