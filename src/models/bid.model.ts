import { model, Schema } from "mongoose";

const bidSchema = new Schema({
  amount: {
    type: Schema.Types.Number
  },
  bidder: {
    type: Schema.Types.Array
  },
  auction: {
    type: Schema.Types.String
  },
  createdAt: {
    type: Schema.Types.Date
  }
});

export const Bid = model('bid', bidSchema);