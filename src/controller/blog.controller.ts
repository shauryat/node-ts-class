import { Request, Response } from 'express';
import Comment from '../models/comment.model';
import Blog from '../models/blog.model';

const createBlog = async (req: Request, res: Response) => {
    // @ts-ignore
    const { id } = req.user; // extracting user id from JWT Token
    const { blog } = req.body;
    blog.user = id;
    const createdBlog = new Blog(blog);
    await createdBlog.save();
    res.json({ blog: createdBlog });
}

const ReadAllBlog = async (req: Request, res: Response) => {
    const allBlogs = await Blog.find({});
    res.json({ blogs: allBlogs });
}

const ReadOneBlog = async (req: Request, res: Response) => {
    const { blogId } = req.params;
    const specificBlog = await Blog.findById(blogId);
    res.json({ blogs: specificBlog });
}

const UpdateBlog = async (req: Request, res: Response) => {
    const { blogId } = req.params;
    // @ts-ignore
    const owner = req.user.id;
    const { blog } = req.body;
    const blogCheck = await Blog.findById(blogId);
    console.log(owner);
    console.log(blogCheck?.user._id);
    if (blogCheck?.user._id == owner) {
        const updatedBlog = await Blog.findByIdAndUpdate(blogId, blog, { new: true });
        res.json({ blogs: updatedBlog });
    } else {
        res.json({ msg: "you are not the owoner" })
    }
}

const DeleteBlog = async (req: Request, res: Response) => {
    const { blogId } = req.params;
    // @ts-ignore
    const owner = req.user.id;
    const blogCheck = await Blog.findById(blogId);
    if (blogCheck?.user._id == owner) {
        const DeleteddBlog = await Blog.findByIdAndDelete(blogId);
        res.json({ blogs: DeleteddBlog });
    } else {
        res.json({ msg: "you are not the owoner" })
    }
}

const createComment = async (req: Request, res: Response) => {
    // @ts-ignore
    const { id } = req.user; // extracting user id from JWT Token
    const { comment } = req.body;
    const { blogId } = req.params;
    comment.user = id;
    comment.blog = blogId;
    const newComment = new Comment(comment);
    await newComment.save();

    const commentId = newComment._id;

    const result = await Blog.findByIdAndUpdate(
        blogId, { $push: { comments: commentId } },
        { new: true })
    // .populate('comment.text', '_id name') // inserting user who created comment
    // .exec()

    res.json({ blog: result, comment: newComment });
}

export default { createBlog, ReadAllBlog, ReadOneBlog, UpdateBlog, DeleteBlog, createComment };