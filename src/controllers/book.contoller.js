import { Op } from 'sequelize';
import { Book } from '../models/Book.js'
import { Book_status } from '../models/book_status.js';
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

// https://sequelize.org/docs/v6/other-topics/sub-queries/
export const removeBookFromShelf = async (req, res, next) => {

}

export const countPeopleReading = (bookId) => {

}

export const countPeopleRead = (bookId) => {

}
export const countHowManyReviewsForThisBook = (bookId) => {

}

/**
 * @Author Yousef Meska 
 * @route PUT /api/v1/books/:bookId/status
 * @access private
 * @body {status, progress} 
 */
export const changeStatus = async (req, res, next) => {
    // check first to see  if book is on the database
    const book = await Book.findOne({ where: { id: req.params.bookId } });
    if (!book) {
        return res.status(404).json({ success: false, msg: "Book isn't found" });
    }

    // check to see if the book already has a status or not
    const haveStatus = await Book_status.findOne({
        where: {
            [Op.and]: {
                bookId: req.params.bookId,
                readerId: req.user.id
            }
        }
    })

    if (!haveStatus) {
        const book_status = await Book_status.create({
            readerId: req.user.id,
            bookId: req.params.bookId,
            status: req.body.status,
            progress: req.body.progress
        })
        return res.status(200).json({ success: true, data: book_status, msg: `The book has been added to ${req.body.status}` });
    }
    //Update function of sequelize returns a number of affected rows (first parameter of result array).
    const affectedRows = await Book_status.update({
        status: req.body.status,
        progress: req.body.progress
    }, {
        where: {
            [Op.and]: {
                bookId: req.params.bookId,
                readerId: req.user.id
            }
        }
    })
    const findUpdated = await Book_status.findOne({
        where: {
            bookId: req.params.bookId,
            readerId: req.user.id
        }
    })
    return res.status(200).json({ success: true, affectedRows, data: findUpdated, msg: `You've successfully changed the status from ${haveStatus.status} to ${findUpdated.status}` })
}

/**
 * @Author Yousef Meska
 * @access public
 * @route GET /api/v1/books/status 
 * @returns 
 */
export const getAllBookStatus = async (req, res, next) => {
    const allBookStatus = await Book_status.findAll({});
    return res.status(200).json({ success: true, data: allBookStatus });
}

export const deleteAllBookStatus = async (req, res, next) => {
    const deletedBooksRows = await Book_status.destroy({ where: {}, truncate: true });
    return res.status(200).json({ success: true, data: deletedBooksRows })
}


export const getAllBooksByStatusForUser = async (req, res, next) => {
    console.log(req.params.readerId);
    const books = await Book_status.findAll({
        where: {
            [Op.and]: {
                readerId: req.params.readerId,
                status: req.params.status
            }
        }
    })
    return res.status(200).json({ success: true, data: books });
}
//TODO: use transactions


// export const updateBookImage = async (req, res, next) => {
//     try {
//         const bookImage = req.file.filename;
//         const doesExist = await Book.findOne({
//             where: {
//                 id: req.params.bookId,
//             }
//         })

//     } catch (error) {
//         return res.status(500).json({ success: false, msg: error.message });
//     }
// }


