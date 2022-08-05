import { sequelize } from '../database/database.init.js';
import { DataTypes } from 'sequelize';
import { Reader } from './Reader.js';
import { Book } from './Book.js';





export const Book_status = sequelize.define("Book_status", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    status: {
        type: DataTypes.STRING,
    },
    // readerId: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: Reader,
    //         key: "id"
    //     }
    // },
    // bookId: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: Book,
    //         key: "id"
    //     }
    // },
    progress: {
        type: DataTypes.INTEGER
    },
    progress_percentage: {
        type: DataTypes.DECIMAL
    }
})


{
    // hooks: {
    //     afterCreate: async (book_status) => {
    //         // check first if progress is bigger than 0
    //         if (book_status.progress > 0) {
    //             console.log(`bigger than 0`)
    //             // findBook by Id
    //             const book = await Book.findByPk(book_status.bookId);
    //             progress_percentage = ParseInt(book.totalPages / book_status.progress) * 100
    //         }
    //     },
    //     beforeUpdate: (book_status) => {
    //         console.log(book_status);
    //     },
    //     afterUpdate: (book_status) => {
    //         console.log(`after update`, book_status)
    //     }
    // }
}

//TODO: return book iteslef on status
//TODO: use caching for searching 