import { Comment } from "../models/Comment.js";

export const editCommentById = async (req, res, next) => {
    try {
        const updatedComment = await Comment.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        return res.status(200).json({ success: true, data: updatedComment, msg: "Comment Has been updated!" })
    } catch (error) {
        return res.status(500).json({ success: false, msg: error.message });
    }
}

export const addComment = async (req, res, next) => {
    const { taskId, the_comment } = req.body;
    try {
        const newComment = await Comment.create({
            the_comment,
            taskId
        })
        await newComment.save()
        return res.status(200).json({ success: true, data: newComment })
    } catch (error) {
        return res.status(500).json({ success: false, msg: error.message });
    }
}

export const deleteCommentById = async (req, res, next) => {
    try {
        const deletedComment = await Comment.destroy({
            where: { id: req.params.id }
        })

        res.status(200).json({ success: true, data: deletedComment, msg: "Deleted Successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, msg: error.message })
    }

}

export const getAllComments = async (req, res, next) => {
    try {
        const comments = await Comment.findAll();
        return res.status(200).json({ success: true, data: comments })
    } catch (error) {
        return res.status(500).json({ success: false, msg: error.message })
    }
}
export const getCommentById = async (req, res, next) => {
    try {
        const comment = await Comment.findByPk(req.params.id);
        return res.status(200).json({ success: true, data: comment });
    } catch (error) {
        return res.status(500).json({ success: false, msg: error.message })
    }
}