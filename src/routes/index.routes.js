import { verifyToken } from "../utils/jwt";




router.post("/auth/user/login", login2);
router.post("/auth/publisher/signup", publisherSignup)
router.post("/auth/reader/signup", readerSignup);

/**
 * Me routes
 */
router.get("/me", verifyToken, getMyProfile);
router.get("/me/groups", verifyToken, getMyGroups);
router.get("/me/favoriteBooks", verifyToken, getMyFavBooks);
router.get("/me/shelves", verifyToken, getMyShelves);
router.get("/me/setting/reset-password", verifyToken, resetPassword);
router.put("/me/settings/change-account-privacy", verifyToken, changeAccountPrivacy);
//TODO: it could be minimized into single route (update)
router.put("/me/settings/update-profile-image", verifyToken, updateMyProfileImage);
router.put("/me/settings/cover-profile-image", verifyToken, updateMyProfileImage);
router.put("/me/settings/profile", verifyToken, updateMyDataProfile)
// check if the friend can accept new friend request or not
router.get("/me/following", verifyToken, getMyFollowing);
router.get("/me/followers", verifyToken, getMyFollowers);
router.get("/me/subscription", verifyToken, getAllMySubscription);
router.get("/me/subscription/:subId", verifyToken, getMySingleSubscription);


/**
 * Comment routes
 */
router.get("/comments", verifyToken, getAllComments);
router.get("/comments/:id", verifyToken, getComment);
router.delete("/comments/:id", verifyToken, deleteComment);
router.put("/commenst/:id", verifyToken, editComment)
router.post("/comments", verifyToken, addComment);


/**
 * Review routes
 */

router.get("/reviews", verifyToken,);
router.post("/reviews/:bookId", verifyToken,)
router.delete("/reviews/:reviewId", verifyToken);
router.



    /**
     * Follow Routes
     */
    router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUserById);
router.get("/users/verify-email/:code/:email", verifyEmail);
router.get("/user/:id/followers", getFollowers);
router.get("/user/:id/following", getFollowing);
router.put("/user/:id/friendsMutual", getFriendsMutual)


/**
 * Friends & Following
 */
router.delete("/followers/:id", verifyToken, deleteMyFollowerById)
router.delete("/following/:id", verifyToken, deleteMyFollowing);
router.post("/friends/:friendId/accept", verifyToken, acceptMyFriend);
router.post("/friends/:friendId", verifyToken, addNewFriend)

/**
 * Club
 */


/**
 * Subscription
 */
router.delete("/subscription/:subId/cancel", verifyToken, cancelSubscription);
router.post("/subscription/:courseId", verifyToken, addSubscription)
