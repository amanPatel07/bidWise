import { Router } from 'express';
import AuctionController from '../../../controller/auctionController';

const auctionRouter = Router();

auctionRouter
    .post('/', AuctionController.createAuction)
    .get('/', AuctionController.getAllAuction)
    .get('/:id', AuctionController.getAuctionById)
    .delete('/:id', AuctionController.deleteAuction)
    .put('/:id', AuctionController.updateAuction);

export default auctionRouter;
