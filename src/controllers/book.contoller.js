import { Book } from '../models/Book.js'
import { Shelf } from '../models/Shelf.js';
export const createBook = async (req, res, next) => {
    try {
        const newBook = await Book.create(req.body);
        await newBook.save();
        return res.status(200).send({ success: true, data: newBook });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const getAllBooks = async (req, res, next) => {
    try {
        const allBooks = await Book.findAll({});
        return res.status(200).json({ success: true, data: allBooks });
    } catch (error) {
        return res.status(500).json({ success: false, msg: error.message });
    }
}

export const deleteBook = async (req, res, next) => {

}
/**
 * @Author Yousef Meska
 * @route `api/v1/shelf/addBook
 * @body {bookId, shelfId}
 * @access private
 * @returns added books
 */
export const addBookToShelf = async (req, res, next) => {
    try {
        //TODO:
        // find the shelf first

        // check if book already exist then

        // add book Id into ShelfBook

        // Shelf.findByPk(req.body.shelfId).then((shelf) => {
        //     shelf.addBook(req.body.bookId)
        // }).then(() => {
        //     res.status(200).json({ success: true })
        // })

        const shelf = await Shelf.findByPk(req.body.shelfId);
        await shelf.addBook(req.body.bookId);
        return res.status(200).json({ success: true, msg: "Book added to the shelf" });

    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}

/**
 * @Author Yousef Meska
 * @route [GET] `/api/v1/shelf/:shelfId/books` 
 * @returns list of books under a shelf
 */
export const getBooksUnderShelf = async (req, res, next) => {
    try {
        const books = await Shelf.findAll({
            where: {
                id: req.params.shelfId
            },
            include: [{ model: Book }],
            attributes: ['id']
        })
        return res.status(200).json({ success: true, data: books })
    } catch (error) {
        return res.status(500).json({ success: false, msg: error.message });
    }
}


/**
 * @Author Yousef Meska
 * @route `api/v1/shelf/removeBook
 * @body {bookId, shelfId}
 * @access private
 */

//TODO: complete those functionalites
export const removeBookFromShelf = async (req, res, next) => {

}

export const countPeopleReading = (bookId) => {

}

export const countPeopleRead = (bookId) => {

}
export const countHowManyReviewsForThisBook = (bookId) => {

}
