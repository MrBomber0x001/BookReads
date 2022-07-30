import { Router } from 'express';
import { login, login2, signup, signupReader, signupStore } from '../controllers/auth.controller.js';
const router = Router();



router.post("/auth/user/login", login2);

router.post("/auth/store/signup", signupStore)
router.post("/auth/reader/signup", signupReader);
export default router;