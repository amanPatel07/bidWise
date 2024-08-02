import { Router } from "express";
import AuctionController from "../controllers/auction.controller";

const auction = Router();
const auctionController = new AuctionController();

auction
  .route('/create')
  .post(auctionController.createAuction);

export default auction;