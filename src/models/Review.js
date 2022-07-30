// Review has more than a comment
// Single Book has more one review
// Single user has more than on review
import { sequelize } from '../database/database.init.js'
import { DataTypes } from 'sequelize'
export const Review = sequelize.define("Reviews", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Text: {
        type: DataTypes.TEXT,
    },
    MediaURL: {
        type: DataTypes.STRING
    },
    Rate: {
        type: DataTypes.INTEGER
    }
})
