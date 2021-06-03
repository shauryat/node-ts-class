import { Document } from 'mongoose'

export default interface IUser extends Document {
    email: string;
    name: string;
    password: string;
    registered_time: Date;
}

