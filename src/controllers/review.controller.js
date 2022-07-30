import { Reader } from '../models/Reader.js';
import { Review } from '../models/Review.js'
import { Book } from '../models/Book.js'
/**
 * @Author Yousef Meska
 * @route [POST]`/api/v1/reviews/:bookId`
 * @access private
 */
export const createReview = async (req, res, next) => {
    try {
        const newReview = await Review.create({
            readerId: req.user.id,
            bookId: req.params.bookId,
            Text: req.body.text,
            Rate: req.body.rate
        });

        await newReview.save();

        //notify users
        // io.emit("server:newReview", `${userId} has reviewed ${bookId}`)

        res.status(201).json({ sucess: true, data: newReview, msg: "The review has been created" })
    } catch (error) {
        res.status(500).json({ sucess: false, msg: error.message });
    }
}
/**
 * @Author Yousef Meska
 * @route [DEL] `api/v1/review/:reviewId`
 * @access private
 */
export const deleteReview = async (req, res, next) => {
    const review = await Review.findOne({
        where: {
            id: req.params.reviewId,
            readerId: req.user.id
        }
    })
    if (review.readerId != req.user.id) {
        return res.status(403).json({ success: false, msg: "Forbidden" })
    }

    const deletedReview = await Review.destroy({
        where: {
            id: req.params.reviewId,
            readerId: req.user.id
        }
    })
    return res.status(200).json({ success: true, data: deletedReview, msg: "Deleted Succesfully!" });
}

/**
 * @Author Yousef Meska
 * @route GET `/api/v1/reviews/:userId`
 * @access private 
 */
export const getReviewsForUser = async (req, res, next) => {
    const reviews = await Review.findAll({
        where: {
            readerId: req.user.id
        },
        include: [{
            model: Reader
        }]
    })

    const anotherReviews = await Reader.findAll({
        where: {
            id: req.user.id
        },
        include: [{ model: Review }],
        attributes: ['id']
    })
    res.status(200).json({ success: true, data: reviews, anotherData: anotherReviews });
}

/**
 * @Author Yosuef Meska
 * @route POST `/api/v1/comment/:reviewId/` 
 * @access private
 */
export const commentOnReview = async (req, res, next) => {
    // find review first
    // create new comment on that review by Id
    const review = await Review.findOne({
        where: {
            id: req.params.reviewId
        }
    })

    if (!review) {
        return res.status(404).json({ success: false, msg: "Forbidden" });
    }

    const newComment = await Comment.create({
        from: req.user.id,
        to: req.params.userId,
        reviewId: req.params.reviewId,
        the_comment: req.body.comment
    })


    await newComment.save();

    // notify users
    io.to(userId).emit("newComment", newComment);
    return res.status(200).json({ success: true, data: newComment, msg: "Comment created successfully!" });
}

/**
 * @Author Yousef Meska
 * @route GET `/api/v1/reviews/books/:bookId
 * @access 
 */
export const getAllReviewsForBook = async (req, res, next) => {
    const reviews = await Book.findAll({
        where: {
            id: req.params.bookId,
        },
        include: [{ model: Review }]
    })

    return res.status(200).json({ success: true, data: reviews });
}

export const getAllReviews = async (req, res, next) => {
    try {
        const allReviews = await Review.findAll({
        })
        return res.status(200).json({ success: true, data: allReviews })
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}


