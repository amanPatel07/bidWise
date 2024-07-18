import { Request, Response } from "express";
import { User } from "../models/user";
// import { sign } from "jsonwebtoken";

const privateKey = process.env.JWT_TOKEN_KEY || '';
const expiresIn = process.env.JWT_EXPIRE || '';

// function jsonWebToken(id: string) {
//   return sign({ id }, privateKey, {
//     expiresIn: expiresIn
//   });
// }
class RegistrationControl {
  public async createNewUser(request: Request, response: Response): Promise<void> {
    console.log(request.body)
    const user = await User.create(request.body);
    response.status(200).json({ user });
  }
}

export default RegistrationControl;