import mongoose, { Schema } from 'mongoose';
import IBlog from '../interface/blog';


const BlogSchema: Schema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        text: { type: String, required: true },
        image: { type: String, required: true },
        comments: [{
            text: String,
            user: { type: mongoose.Types.ObjectId, ref: 'User' }
        }]
    }
)


export default mongoose.model<IBlog>('Blog', BlogSchema);