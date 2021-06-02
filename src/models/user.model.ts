import mongoose, { Schema } from 'mongoose'
import IUser from '../interface/user';

const UserScehma: Schema = new mongoose.Schema({
    email : {type : String , require : true},
    firstName : {type : String , require : true},
    lastName : {type : String , require : true}
})

export default mongoose.model<IUser>('User' , UserScehma);