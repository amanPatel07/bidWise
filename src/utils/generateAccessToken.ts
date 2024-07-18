import { sign } from "jsonwebtoken";

export class GenerateAccessToken {
  public generateAccessToken(id: string): string {
    const privateKey = process.env.JWT_TOKEN_KEY || '';
    const expiresIn = process.env.JWT_EXPIRE || '';
    return sign({ id }, privateKey, {
      expiresIn: expiresIn
    });
  }
}