import { Request , Response , NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

const auth = (req : Request, res : Response, next : NextFunction) => {
  const token = req.header('x-auth-token');
  // Check for token
  if (!token)
    return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    // Verify token
    const payload = jwt.verify(token, config.secret);
    // Add user from payload 
    // @ts-ignore
    req.user = payload;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};

export default auth;