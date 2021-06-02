import express from "express";
import blogController from '../controller/blog.controller';
const router = express.Router();

router.post('/:userId', blogController.createBlog);
router.put("/:blogId/:userId" , blogController.createComment);
router.get('/', blogController.ReadAllBlog);
router.get('/:id' , blogController.ReadOneBlog);
router.put('/:id' , blogController.UpdateBlog);
router.delete('/:id' , blogController.DeleteBlog);

export = router;