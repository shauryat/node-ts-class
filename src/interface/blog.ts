import { Document } from 'mongoose'
import IComment from './comment';
import IUser from './user';

export default interface IBlog extends Document {
    user: IUser['_id'];
    text: string;
    image: string;
    comment: [IComment['_id']];
}