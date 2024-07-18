import { Request, Response } from "express";
import { User } from "../models/user";
class RegistrationControl {
  public async createNewUser(request: Request, response: Response): Promise<void> {
    const user = await User.create(request.body);
    response.status(200).json({ user });
  }
}

export default RegistrationControl;