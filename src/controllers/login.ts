import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

class Login {
  
  public async login(request: Request, response: Response): Promise<void> {

  }

  private generateAccessToken(id: string): void {
    sign({ id }, process.env.JWT_TOKEN_KEY || '');
  }
}