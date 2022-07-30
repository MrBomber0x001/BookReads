import { sequelize } from '../database/database.init';
import { DataTypes } from 'sequelize'

export const Genre = sequelize.define("Genre", {
    genre_type: {
        type: DataTypes.STRING,
        validate: {
            IN: ['action', 'horror', 'romance']
        }
    }
})


// Book has many genre
// genre has many books
// Get all books by Genre