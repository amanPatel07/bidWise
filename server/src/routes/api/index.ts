import { Router } from "express";
import userRouter from "./user/userRouter";
import auctionRouter from "./auction/auctionRouter";
import bidRouter from "./bid/bidRouter";

const router = Router();

router.use('/user', userRouter);
router.use('/auction', auctionRouter);
router.use('/bid', bidRouter);

export default router;