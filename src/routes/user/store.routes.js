import { Router } from 'express';
const router = Router();
import { getMyProfile, getStoreProfile } from '../../controllers/store.controller.js'
import { verifyToken } from '../../middlewares/jwt.js';
import { isStore } from '../../middlewares/auth.js'

router.get("/store/profile", [verifyToken, isStore], getMyProfile);
router.get("/store/:id", getStoreProfile)




// router.get("/publisher/:id", getPublisherProfile);
// router.get("/publisher", getAllPublisher);
// router.delete("/publisher", [verifyToken, isPublisher], deleteMyPublisher); //TODO: do it for me instead and check for
// router.post("/publisher", signUpAsPublisher);

// router.get("/publisher/:id/books", getPublisherBooks);
export default router;