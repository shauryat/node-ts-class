import { Schema, model } from 'mongoose'
import IUser from '../interface/user';

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    register_date: {
        type: Date,
        default: Date.now
    }
})
const User = model<IUser>('User', UserSchema);
export default User;