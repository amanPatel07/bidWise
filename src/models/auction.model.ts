import { model, Schema } from "mongoose";

const auctionSchema = new Schema({
  title: {
    type: Schema.Types.String
  },
  description: {
    type: Schema.Types.String
  },
  startingPrice: {
    type: Schema.Types.Number
  },
  currentPrice: {
    type: Schema.Types.Number
  },
  reservePrice: {
    type: Schema.Types.Number
  },
  startTime: {
    type: Schema.Types.Date
  },
  endTime: {
    type: Schema.Types.Date
  },
  status: {
    type: Schema.Types.String
  },
  seller: {
    type: Schema.Types.String
  },
  highestBidder: {
    type: Schema.Types.String
  },
  bids: {
    type: Schema.Types.Array
  },
  createdAt: {
    type: Schema.Types.Date
  },
  updatedAt: {
    type: Schema.Types.Date
  }
});

export const Auction = model('Auction', auctionSchema);