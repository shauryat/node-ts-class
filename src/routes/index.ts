import express from 'express';
import calc from '../controller';
const router = express.Router();

router.post("/", calc.calcController);

export = router;