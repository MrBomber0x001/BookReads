import { Router } from 'express';
import { verifyToken } from '../middlewares/jwt.js';
import { createClub, listClubMembers } from '../controllers/club.controller.js'
const router = Router();


router.post("/clubs/create", verifyToken, createClub);
// router.delete("/clubs/:clubId", verifyToken, deleteClub);
// router.put("/clubs/change-privacy", verifyToken, changePrivacy);
// router.get("/clubs/list/:id", getSingleClub);
router.get("/clubs/members/list/:clubId", verifyToken, listClubMembers)
// router.get("/clubs/list", getAllClubs);
// router.get("/reader/:readerId/clubs", getAllClubsForUser);
// router.get("/me/clubs", verifyToken, getMyClubs);
// router.post("/club/:clubId/send-invitation", sendClubInvitation);


export default router;