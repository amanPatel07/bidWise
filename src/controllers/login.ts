import { Request, Response } from "express";
import { User } from "../models/user";
import { GenerateAccessToken } from "../utils/generateAccessToken";

class Login extends GenerateAccessToken {

  public async login(request: Request, response: Response): Promise<void> {
    const { username, password } = request.body;

    if (!username && !password) {
      response.status(400).json()
    }

    const user = await User.findOne({ username }).select('+password');

    if (user) {
      const isAuthenticatedUser = await user.validatePassword(password, user.password);
      if (isAuthenticatedUser) {
        const generateAccessToken = new GenerateAccessToken();
        response.status(200).json({
          access_token: generateAccessToken.generateAccessToken(user.id)
        })
      }
    } else {
      response.status(400).json({
        message: 'No User Found'
      })
    }
  }
}

export default Login;