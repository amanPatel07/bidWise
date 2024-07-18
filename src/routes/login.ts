import { Router } from "express";
import Login from "../controllers/login";

const login = Router();
const loginController = new Login();

login
  .route('/login')
  .post(loginController.login);

export default login;