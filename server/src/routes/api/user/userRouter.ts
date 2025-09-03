import { Router } from "express";
import UserController from "../../../controller/userController";
import requireRole from "../../../middleware/requireRole";

const userRouter = Router();

userRouter
    .post('/', UserController.createUser)
    .get('/', UserController.getUsers)
    .get('/:id', UserController.getUserById);

export default userRouter;