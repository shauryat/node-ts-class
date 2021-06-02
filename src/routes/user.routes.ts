import express from "express";
import userController from '../controller/user.controller';

const router = express.Router();

router.post('/', userController.creatUser);
router.get('/' , userController.allUser);
export = router;