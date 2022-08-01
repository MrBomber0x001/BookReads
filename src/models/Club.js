// import {sequelize} from '../database/database.init.js';
// import {DataTypes} from 'sequelize'
// import {Reader} from './Reader.js'
// export const Club = sequelize.define({
// 	name: {
// 		type: DataTypes.STRING
// 	},
// 	description: {
// 		type: DataTypes.TEXT
// 	},
// 	memberCount: {
// 		type: DataTypes.INTEGER
// 	},
// 	privacy: { T > public, F > private
// 		type: DataTypes.BOOLEAN
// 	},
// 	category: {
// 		type: DataTypes.STRING
// 	}
// })

// export const roles = sequelize.define({
// 	clubId: {
// 		type: DataTypes.INTEGER,
// 		references: {
// 			model: Club,
// 		}
// 	},
// 	role: {
// 		enum: ['admin', 'club_owner', 'member']
// 	}
// })

// // TODO: every permission have it's own operations

// Reader.hasMany(Club, {
// 	foreignKey: "readerId",
// 	sourceKey: "id"
// });

// Club.belongsTo(Reader, {
// 	foreignKey: 'readerId',
// 	targetId: "id"
// })
