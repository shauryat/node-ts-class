import { Response, Request } from 'express';
import User from '../models/user.model';

const allUser = async (req: Request, res: Response) => {
    const allUser = await User.find({});
    res.json({ users: allUser });
}

export default { allUser };