import { Shelf } from "../models/Shelf.js";
import { Reader } from "../models/Reader.js";
import { Op } from "sequelize";
export const createShelf = async (req, res, next) => {
    try {
        const newShelf = await Shelf.create({
            readerId: req.user.id,
            Name: req.body.name
        })

        await newShelf.save();
        res.status(201).json({ success: true, data: newShelf });
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}
/**
 * @Author Yousef Meska
 * @route GET`/api/v1/me/shelf`
 * @access private 
 */
export const getAllShelvesForMe = async (req, res, next) => {
    try {
        const shelves = await Shelf.findAll({
            where: {
                readerId: req.user.id,
            },
            include: [{ model: Reader }]
        })
        res.status(500).json({ success: true, data: shelves });
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}
/**
 * @Author Yousef Meska
 * @route [GET] `/api/v1/shelf/:readerId 
 */
export const getAllShelvesByUserId = async (req, res, next) => {
    try {
        const shelves = await Shelf.findAll({
            where: {
                readerId: req.params.readerId
            }
        })
        return res.status(200).json({ success: true, data: shelves });
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}

/**
 * @Author Yousef Meska
 * @router GET `/api/v1/shelf/:shelfId`
 * @access private 
 */

export const getSingleShelf = async (req, res, next) => {
    try {
        const singleShelf = await Shelf.findOne({
            where: {
                [Op.and]: {
                    id: req.params.shelfId
                }
            }
        })
        return res.status(200).json({ success: true, data: singleShelf });
    } catch (error) {
        return res.status(500).json({ success: false, msg: error.message });
    }
}
/**
 * @Author Yousef Meska
 * @route DELETE `/api/v1/shelf/:shelfId` 
 */
export const deleteShelf = async (req, res, next) => {
    try {
        const deletedShelf = await Shelf.destroy({
            where: {
                readerId: req.user.id,
                id: req.params.shelfId
            }
        })
        return res.status(200).json({ success: true, data: deleteShelf, msg: "Deleted Successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, msg: error.message });
    }
}

//TODO: removeBookFromShelf (N:M)
/**
 * @Author Yousef Meska
 * @route [DEL] `/api/v1/shelf/:shelfId/:bookId`
 */
export const removeBookFromShelf = async (req, res, next) => {
    try {
        const removedBook = await Shelf.update({

        })
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}


export const getAllShelves = async (req, res, next) => {
    try {
        const allShelves = await Shelf.findAll({});
        return res.status(200).json({ success: true, data: allShelves })
    } catch (error) {
        return res.status(500).json({ success: false, msg: error.message });
    }
}