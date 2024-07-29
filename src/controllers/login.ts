import { NextFunction, Request, Response } from "express";
import { User } from "../models/user";
import { GenerateAccessToken } from "../utils/generateAccessToken";

class Login extends Error {

  public async login(request: Request, response: Response, next: NextFunction): Promise<void> {
    const { username, password } = request.body;

    if (!username && !password) {
      return next(new Error('Something went wrong'));
    }

    const user = await User.findOne({ username }).select('+password');

    if (user) {
      const isAuthenticatedUser = await user.validatePassword(password, user.password);
      if (isAuthenticatedUser) {
        const generateAccessToken = new GenerateAccessToken();
        response.status(200).json({
          access_token: generateAccessToken.generateAccessToken(user.id)
        })
      } else {
        return next(new Error('Not Authenticated User'));
      }
    } else {
      return next(new Error('User not found'));
    }
  }
}

export default Login;