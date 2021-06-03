import express from "express";
import blogController from '../controller/blog.controller';
import auth from '../middleware/auth';
const router = express.Router();

router.post('/create', auth ,  blogController.createBlog);
router.put("/comment/:blogId" , auth , blogController.createComment);
router.get('/read', blogController.ReadAllBlog);
router.get('/read/:blogId' , blogController.ReadOneBlog);
router.put('/update/:blogId' , auth , blogController.UpdateBlog);
router.delete('/delete/:blogId' , auth , blogController.DeleteBlog);

export = router;