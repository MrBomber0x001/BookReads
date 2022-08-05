import { sequelize } from '../database/database.init.js';
import { DataTypes } from 'sequelize'
import { Reader } from './Reader.js'
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


export const Club = sequelize.define("club", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    createdBy: {
        type: DataTypes.INTEGER,
        references: {
            model: Reader,
            key: "id"
        },
        allowNull: false
    },
    updatedBy: {
        type: DataTypes.INTEGER,
        references: {
            model: Reader,
            key: "id"
        }
    },
    slug: {
        //the slug to form the unique URL.
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        // ['active', 'approved', 'active', 'blocked', 'new']
        type: DataTypes.STRING,
        isIn: ['active', 'approved', 'active', 'blocked', 'new']
    },
    privacy: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        isIn: ['T', 'F']
    },
    summary: {
        type: DataTypes.TEXT,
    }
})

export const ClubMembers = sequelize.define("club_member", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // clubId: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: Club,
    //         key: "id"
    //     }
    // },
    // readerId: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: Reader,
    //         key: "id"
    //     }
    // },
    type: {
        type: DataTypes.STRING,
        isIn: ['admin', 'member']
    },
    status: {
        type: DataTypes.STRING,
        isIn: ['new', 'active', 'rejected', 'blocked']
    },
})

export const ClubPost = sequelize.define("club_posts", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
})

/* //TODO: 1. unique constraints and general constraints in sequelize.
          // 2. how to use indexing 
*/





Club.hasMany(ClubPost);
ClubPost.belongsTo(Club)

Reader.hasMany(ClubPost)
ClubPost.belongsTo(Reader)

Club.hasMany(ClubMembers);
ClubMembers.belongsTo(Club)

Reader.hasMany(ClubMembers)
ClubMembers.belongsTo(Reader)