// import { Project } from "../models/Project.js"
// import { Op } from 'sequelize'
// import { Task } from "../models/Task.js";
// import { User } from '../models/Reader.js'
// /**
//  * @desc get all my projects
//  * @route GET /me/projects
//  * @access private [authenticated user only]
//  */
// export const getMyProjects = async (req, res, next) => {
//     try {
//         const projects = await Project.findAll({
//             where: {
//                 [Op.and]: [
//                     { userId: req.user.id },
//                 ]
//             }
//         })
//         res.status(200).json({ success: true, data: projects });
//     } catch (error) {

//     }
// }

// export const getMyProfile = async (req, res, next) => {
//     try {

//         // send all user projects along with the data

//         const projects = await Project.findAll({
//             where: {
//                 userId: req.user.id
//             }, include: [{ model: Task }, { model: User }]
//         })

//         // const tasks = [];
//         // // for (let project in projects) {
//         // //     console.log(projects[project].id)
//         // //     tasks.push(Task.findAll({
//         // //         where: {
//         // //             projectId: projects[project].id
//         // //         }
//         // //     }))
//         // // }

//         // // projects.forEach(async (project) => {
//         // //     const task = await Task.findOne({
//         // //         where: {
//         // //             projectId: project.id
//         // //         }
//         // //     })
//         // //     console.log(task);
//         // //     tasks.push(task);
//         // // })
//         // //TODO: fix this implementation
//         // for (let i = 0; i < projects.length; i++) {
//         //     const task = await Task.findOne({
//         //         where: {
//         //             projectId: projects[i].id
//         //         }
//         //     })
//         //     tasks.push(task)
//         // }
//         // console.log(tasks);

//         return res.status(200).json({ success: true, data: { userProfile: req.user, projects } });
//     } catch (error) {
//         return res.status(500).json({ success: false, msg: error.message });
//     }
// }