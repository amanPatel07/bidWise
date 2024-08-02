import { Router } from "express";
import Dashboard from "../controllers/dashboard.controller";

const dashboard = Router();
const dashboardController = new Dashboard();

dashboard
  .route('/dashboard')
  .get();

export default dashboard;