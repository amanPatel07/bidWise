import { Router } from 'express';
import BidController from '../../../controller/bidController';

const bidRouter = Router();

bidRouter.post('/:auctionId', BidController.placeBid).get('/:auctionId', BidController.getAllBids);

export default bidRouter;
