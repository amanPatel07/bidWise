import { NextFunction, Request, Response } from "express";
import { Auction } from "../models/auction.model";

class Dashboard {
  public async getAuctionList(req: Request, res: Response, next: NextFunction) {
    const auctionList = await Auction.find();
    res.status(200).json({ data: auctionList });
  }

  public async getAuctionById(req: Request, res: Response, next: NextFunction) {
    const auctionId = req.params.id;
    const foundAuction = await Auction.findById(auctionId);
    res.status(200).json({ data: foundAuction });
  }
}

export default Dashboard;