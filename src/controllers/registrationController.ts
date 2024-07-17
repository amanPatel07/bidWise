import { sign } from "jsonwebtoken";
import { User } from "../models/user";

const privateKey = process.env.JWT_TOKEN_KEY || '';
const expiresIn = process.env.JWT_EXPIRE || '';

function jsonWebToken(id: string) {
  return sign({ id }, privateKey, {
    expiresIn: expiresIn
  });
}

const registrationControl = async (req: any, res: any) => {
  const user = await User.create(req.body);
  res.status(200).json({ user })
}

export default registrationControl;