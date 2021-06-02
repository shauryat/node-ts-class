import { Document } from 'mongoose'
import IUser from './user';

interface IComment {
    text: string
    user: IUser['_id']
}

export default interface IBlog extends Document {
    user: IUser['_id'];
    text: string;
    image: string;
    comment: [IComment];
}