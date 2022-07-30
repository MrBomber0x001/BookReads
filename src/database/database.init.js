import Sequelize from "sequelize";

export const sequelize = new Sequelize('project_tasks', 'postgres', '4cex01bk', {
    host: "localhost",
    dialect: "postgres"
})
