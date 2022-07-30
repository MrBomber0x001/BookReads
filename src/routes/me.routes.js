import { Router } from 'express';
const router = Router();
// import { getMyProjects, getMyProfile } from '../controllers/me.controller.js'
import { getAllShelvesForMe } from '../controllers/shelf.controller.js';
import { isReader } from '../middlewares/auth.js';
import { verifyToken } from '../middlewares/jwt.js';

// router.get("/me/projects", verifyToken, getMyProjects)
// router.get("/me/groups", verifyToken, getMyGroups);
// router.get("/me/favoriteBooks", verifyToken, getMyFavBooks);
// router.get("/me/reviews", verifyToken, getMyReviews);
router.get("/me/shelves", [verifyToken, isReader], getAllShelvesForMe);
// router.get("/me/", verifyToken, getMyProfile);

export default router;