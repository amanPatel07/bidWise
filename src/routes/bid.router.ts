import { Router } from "express";
import BidController from "../controllers/bid.controller";

const bidRouter = Router();
const bidController =  new BidController();
bidRouter
  .route('/bid')
  .post(bidController.createBid);

export default bidRouter;