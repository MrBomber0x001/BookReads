import jwt from 'jsonwebtoken'
import { Reader } from '../models/Reader.js';
import { Store } from '../models/Store.js';
//TODO: handle not token found and decoded not found!
export const verifyToken = async (req, res, next) => {
    try {
        const authToken = req.headers['authorization'];
        console.log(authToken);
        const token = authToken ? authToken.split(" ")[1] : '';
        const decoded = jwt.verify(token, "secret");
        console.log(decoded);
        let user;
        // switch (decoded.person) {
        //     case "reader":
        //         user = await Reader.findOne({
        //             where: {
        //                 id: decoded.id
        //             }
        //         })
        //         break;
        //     case "store":
        //         user = await Store.findOne({
        //             where: {
        //                 id: decoded.id
        //             }
        //         })
        //         break;
        // }
        const { person } = decoded;
        if (person === 'reader') {
            user = await Reader.findOne({
                where: {
                    id: decoded.id
                }
            })
        } else if (person === 'store') {
            user = await Store.findOne({
                where: {
                    id: decoded.id
                }
            })
        }
        console.log(user);

        req.user = user;
        next();
    } catch (error) {
        console.log("You are not authorized")
        return next(error);
    }
}
export const signToken = (obj) => {
    return jwt.sign(obj, "secret");
}