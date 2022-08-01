import { Router } from 'express';
const router = Router();
import { getMyProfile, getReaderProfile, getAllReaders } from '../../controllers/reader.controller.js'
import { getAllBooksByStatusForUser } from '../../controllers/book.contoller.js'
import { verifyToken } from '../../middlewares/jwt.js';
import { isReader } from '../../middlewares/auth.js'


router.get("/reader/profile", [verifyToken, isReader], getMyProfile);
router.get("/reader/:id", getReaderProfile);
router.get("/reader", getAllReaders);
router.get("/reader/:readerId/status/:status", getAllBooksByStatusForUser)

export default router;