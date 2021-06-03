import { Router } from 'express';
import authController from '../controller/auth.controller';
const router = Router();

router.post('/register', authController.Register);
router.post('/login' , authController.Login);
export = router;