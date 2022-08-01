import app from './app.js'
// Models
import { sequelize } from "./database/database.init.js";
// import "./models/Project.js";
// import "./models/Task.js"
//import "./models/User.js"
import './models/Reader.js';
import './models/Store.js';
import "./models/Store.js";
import './models/Shelf.js';
async function main() {
    try {
        // await sequelize.authenticate(); // for authenticating and testing
        await sequelize.sync({ force: true }); // to start models { force: true }
        console.log("Connection has been established succesfully!");
        app.listen(3000, () => {
            console.log(`:rocket: is running`)
        })
    } catch (error) {
        console.log("unabl e to connect to the database!", error);
    }
}
main();


// export class App {
//     constructor(app) {
//         this.app = app;
//     }

//     middlewares() {
//         // CORS
//         this.app.use((req, res, next) => {
//             res.setHeader('Access-Control-Allow-Credentials', true);
//             res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_DOMAIN);
//             res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//             res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//             next();
//         });

//         // Read body of request
//         this.app.use(express.urlencoded({ extended: false }));
//         this.app.use(express.json());

//         dotenv.config({ path: `./config/config.env` });

//         // use morgan
//         if (process.env.NODE_ENV === `development`) {
//             app.use(morgan(`dev`));
//         }

//         // Access to public folder
//         app.use(express.static(path.join(__dirname, 'public')));
//     }


//     ErrorMiddleware() {
//         app.use(errorHandling);
//     }

//     routes() {

//         this.app.use(userRoutes);
//         this.app.use(authRoutes);
//         this.app.use(meRoutes);
//         this.app.use(commentRoutes);
//         this.app.use(shelfRoutes);
//         this.app.use(authorRoutes);
//         this.app.use(groupRoutes);

//         this.app.use((req, res, next) => {
//             return res.status(404).json({
//                 success: false,
//                 error: {
//                     code: 404,
//                     message: `this url not found`
//                 }
//             })
//         });
//     }

//     SocketConfiguration(httpServer) {

//     }

// }