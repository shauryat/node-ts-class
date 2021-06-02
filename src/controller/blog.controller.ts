import { Request, Response } from 'express';
import Blog from '../models/blog.model';

const createBlog = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { blog } = req.body;
    blog.user = userId;
    const createdBlog = new Blog(blog);
    await createdBlog.save();
    res.json({ blog: createdBlog });
}

const ReadAllBlog = async (req: Request, res: Response) => {
    const allBlogs = await Blog.find({});
    res.json({ blogs: allBlogs });
}

const ReadOneBlog = async (req: Request, res: Response) => {
    const { id } = req.params;
    const specificBlog = await Blog.findById(id);
    res.json({ blogs: specificBlog });
}

const UpdateBlog = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { blog } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(id, blog, { new: true });
    res.json({ blogs: updatedBlog });
}

const DeleteBlog = async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);
    res.json({ blogs: deletedBlog });
}

const createComment = async (req: Request, res: Response) => {
    const { comment } = req.body;
    const { userId, blogId } = req.params;
    comment.user = userId;
    const result = await Blog.findByIdAndUpdate(
        blogId, { $push: { comments: comment } },
        { new: true })
        .populate('comment.user', '_id name') // inserting user who created comment
        .exec()

    res.json({ blog: result });
}

export default { createBlog, ReadAllBlog, ReadOneBlog, UpdateBlog, DeleteBlog, createComment };