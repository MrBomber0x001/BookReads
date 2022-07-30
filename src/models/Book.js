import { sequelize } from "../database/database.init.js";
import { DataTypes } from "sequelize"
import { Shelf } from "./Shelf.js";
import { Review } from "./Review.js";

export const Book = sequelize.define("books", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT
    },
    datePublished: {
        type: DataTypes.DATE
    },
    totalPages: {
        type: DataTypes.INTEGER
    },
    rate: {
        type: DataTypes.INTEGER
    }
})



Book.belongsToMany(Shelf, { through: "BooksShelves" });
Shelf.belongsToMany(Book, { through: "BooksShelves" })
//FIXME: change readerId to id in targetId
Book.hasMany(Review, {
    foriengKey: "bookId",
    sourceKey: "id"
});
Review.belongsTo(Book, {
    foreignKey: "bookId",
    targetId: "readerId"
});