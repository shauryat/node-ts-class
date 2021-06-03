import mongoose, { Schema , model } from 'mongoose';
import IComment from '../interface/comment';


const CommentSchema: Schema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        blog: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'Blog'
        },
        text: { type: String, required: true },
    }
)

const Comment = model<IComment>('Comment', CommentSchema);

export default Comment;