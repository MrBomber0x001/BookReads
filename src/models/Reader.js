import { sequelize } from '../database/database.init.js';
import { DataTypes } from 'sequelize';
import { Book } from './Book.js';
import { Shelf } from './Shelf.js';
import { Review } from './Review.js';
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
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    person: {
        type: DataTypes.STRING
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    verificationToken: {
        type: DataTypes.INTEGER
    }
})


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