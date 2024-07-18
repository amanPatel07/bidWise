import { Router } from "express";

const login = Router();

login
  .route('/login')
  .post()