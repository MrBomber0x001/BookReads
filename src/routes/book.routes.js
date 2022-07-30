import { Router } from 'express';
import { createBook, deleteBook, getAllBooks } from '../controllers/book.contoller.js';
import { verifyToken } from '../middlewares/jwt.js';
const router = Router();



router.post("/books", verifyToken, createBook);
router.delete("/books/:id", verifyToken, deleteBook);
router.get("/books", verifyToken, getAllBooks)


export default router

//TODO: based on the id, give his profile 