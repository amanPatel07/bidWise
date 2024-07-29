import { NextFunction, Request, Response } from "express";
import { User } from "../models/user";
import ErrorHandler from "../utils/error-handler";
class RegistrationControl extends ErrorHandler {
  public async createNewUser(request: Request, response: Response, next: NextFunction): Promise<void> {
    const user = await User.create(request.body);
    if (!user) {
      return next(new ErrorHandler('Something went wrong', 404))
    }
    response.status(200).json({ user });
  }
}

export default RegistrationControl;