import { User } from "../models/user";

const registrationControl = async (req: any, res: any) => {
  console.log(req.body)
  const user = await User.create(req.body);
  res.status(200).json({user})
}

export default registrationControl;