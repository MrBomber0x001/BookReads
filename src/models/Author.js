import { sequelize } from "../database/database.init.js";
import { DataTypes } from "sequelize"
import { Book } from "./Book.js";


export const Author = sequelize.define("Author", {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    First_name: {
        type: DataTypes.STRING
    },
    Last_name: {
        type: DataTypes.STRING
    },
    Full_name: {
        type: DataTypes.STRING
    },
    Bio: {
        type: DataTypes.TEXT
    },
    BirthDate: {
        type: DataTypes.DATE
    },
    DeathDate: {
        type: DataTypes.DATE
    },
}, {
    timestamps: false,
    hooks: {
        beforeCreate: (author) => {
            author.Full_name = `${author.First_name} ${author.Last_name}`
        }
    }
})


Author.hasMany(Book, {
    foreignKey: "authorId",
    sourceKey: "id"
})
Book.belongsTo(Author, {
    foreignKey: "authorId",
    targetId: "id"
})