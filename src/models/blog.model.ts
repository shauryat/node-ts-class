import mongoose, { Schema, model } from 'mongoose';
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
        comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }]
    }
)

const Blog = model<IBlog>('Blog', BlogSchema);

export default Blog;