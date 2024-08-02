import { NextFunction, Request, Response } from "express";
import { Auction } from "../models/auction.model";

class AuctionController {

  public async createAuction(req: Request, res: Response, next: NextFunction) {
    const newAuctionRequest = req.body;
    const newAuction = await Auction.create(newAuctionRequest);
    console.log(newAuction);
    res.status(200).json({ data: newAuction });
  }

}

export default AuctionController;