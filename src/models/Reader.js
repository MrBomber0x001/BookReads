import { sequelize } from '../database/database.init.js';
import { DataTypes } from 'sequelize';
import { Book } from './Book.js';
import { Shelf } from './Shelf.js';
import { Review } from './Review.js';
import { Book_status } from './book_status.js';
export const Reader = sequelize.define("readers", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
    },
    person: {
        type: DataTypes.STRING,
        comment: "deciding the type of the user 'reader', 'stores'"
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    verificationToken: {
        type: DataTypes.INTEGER
    },
})




// Reader.belongsToMany(Book, { through: Book_status })
// Book.belongsToMany(Reader, { through: Book_status })


Reader.hasMany(Book, {
    foreignKey: "readerId",
    sourceKey: "id"
})

Book.belongsTo(Reader, {
    foreignKey: "readerId",
    targetId: "id"
})


Reader.hasMany(Shelf, {
    foreignKey: "readerId",
    sourceKey: "id"
})

Shelf.belongsTo(Reader, {
    foreignKey: "readerId",
    targetId: "id"
})

Reader.hasMany(Review, {
    foreignKey: "readerId",
    sourceKey: "id"
})

Review.belongsTo(Reader, {
    foreignKey: "readerId",
    targetId: "id"
})



Reader.hasMany(Book_status)
Book_status.belongsTo(Reader)
Book.hasMany(Book_status)
Book_status.belongsTo(Book)