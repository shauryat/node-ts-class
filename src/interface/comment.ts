import { Document } from 'mongoose'
import IBlog from './blog';
import IUser from './user';


export default interface IComment extends Document {
    user: IUser['_id'];
    blog : IBlog['_id'];
    text: string;
}