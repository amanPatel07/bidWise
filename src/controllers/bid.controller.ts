import { NextFunction, Request, Response } from "express";
import { Bid } from "../models/bid.model";

class BidController {
  public async createBid(req: Request, res: Response, next: NextFunction) {
    const requestedBid = req.body;
    const newBid = await Bid.create(requestedBid);
    res.status(200).json({ data: newBid });
  }
}

export default BidController;