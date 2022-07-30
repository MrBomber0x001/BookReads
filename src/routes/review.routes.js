import { Router } from 'express';
import { verifyToken } from '../middlewares/jwt.js';
import { createReview, deleteReview, getAllReviews, getReviewsForUser, getAllReviewsForBook } from '../controllers/review.controller.js';
const router = Router();


// router.get("/reviews/:reviewId", verifyToken, getReviewById)
router.get("/reviews/books/:bookId", getAllReviewsForBook);
router.get("/reviews/:userId", verifyToken, getReviewsForUser);
router.post("/reviews/create/:bookId", verifyToken, createReview);
router.delete("/reviews/:reviewId", verifyToken, deleteReview);
router.get("/reviews", getAllReviews)
export default router