import { sequelize } from '../database/database.init.js'
import { DataTypes } from 'sequelize';
import { Reader } from './Reader.js';


export const Shelf = sequelize.define("Shelf", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING
    }
})


// Reader.belongsToMany(Book, { through: Shelf });
// Book.belongsToMany(Reader, { through: Reader });