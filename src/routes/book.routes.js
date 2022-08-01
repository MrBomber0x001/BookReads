import { Router } from 'express';
import { changeStatus, createBook, deleteBook, getAllBooks, getAllBookStatus, deleteAllBookStatus } from '../controllers/book.contoller.js';
import { verifyToken } from '../middlewares/jwt.js';
import { bookImageUploader } from '../utils/multer.js';
const router = Router();


router.delete("/books/status", deleteAllBookStatus);
router.post("/books", verifyToken, createBook);
router.delete("/books/:id", verifyToken, deleteBook);
router.get("/books", verifyToken, getAllBooks)
router.put('/books/:bookId/status', verifyToken, changeStatus)
router.get("/books/status", getAllBookStatus)
// router.get("/book", bookImageUploader.single('book-image'),updateBookImage);
export default router

//TODO: based on the id, give his profile 