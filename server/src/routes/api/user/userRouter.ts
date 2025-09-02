import { Router } from "express";
import UserController from "../../../controller/UserController";
import requireRole from "../../../middleware/requireRole";

const userRouter = Router();

try {
    userRouter.post('/', UserController.createUser);
    userRouter.get('/', UserController.getUsers);
    userRouter.get('/:id', UserController.getUserById);
} catch (error) {
    throw error;
}

export default userRouter;