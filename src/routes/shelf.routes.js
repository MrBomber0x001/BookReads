import { Router } from 'express';
const router = Router();
import { createShelf, deleteShelf, getAllShelvesByUserId, getSingleShelf, getAllShelves } from '../controllers/shelf.controller.js';
import { verifyToken } from '../middlewares/jwt.js'
import { isReader } from '../middlewares/auth.js'
import { addBookToShelf, getBooksUnderShelf } from '../controllers/book.contoller.js';

router.get("/shelf/user/:shelfId", verifyToken, getSingleShelf)
router.post("/shelf", [verifyToken, isReader], createShelf)
router.get("/shelf/:readerId", getAllShelvesByUserId);
router.get("/shelf", getAllShelves);
router.delete("/shelf/:shelfId", verifyToken, deleteShelf);
router.post("/shelf/addBook", verifyToken, addBookToShelf)
router.get("/shelf/:shelfId/books", verifyToken, getBooksUnderShelf)
export default router;