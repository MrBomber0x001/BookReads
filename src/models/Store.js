import { sequelize } from '../database/database.init.js';
import { DataTypes } from 'sequelize';
export const Store = sequelize.define("stores", {
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
    location: {
        type: DataTypes.STRING,
        comment: "live location of the store, so the user can search easily using google maps"
    },
    verificationToken: {
        type: DataTypes.INTEGER
    }

})


// Store.hasMany(Book, {
//     foreignKey: "storeId",
//     sourceKey: "id"
// })

// Book.belongsTo(Store, {
//     foreignKey: "storeId",
//     targetId: "id"
// })