import { Response, Request } from 'express';
import User from '../models/user.model';

const creatUser = async (req: Request, res: Response) => {
    const { user } = req.body;
    const createdUser = new User(user);
    await createdUser.save();
    res.json({ User: createdUser })
}

const allUser = async (req: Request, res: Response) => {
    const allUser = await User.find({});
    res.json({ users: allUser });
}

export default { creatUser , allUser };