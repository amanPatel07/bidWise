import { Router } from "express";
import Dashboard from "../controllers/dashboard.controller";

const dashboard = Router();
const dashboardController = new Dashboard();

dashboard
  .route('/dashboard')
  .get(dashboardController.getAuctionList);

dashboard
  .route('/auction/:id')
  .get(dashboardController.getAuctionById);

export default dashboard;