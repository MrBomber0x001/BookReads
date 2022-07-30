import { ErrorResponse } from "../utils/errorResponse.js"

export const isStore = (req, res, next) => {
    if (req.user.person != 'store') {
        // return next(new ErrorResponse("Forbidden", 403));
        return res.status(403).json({ success: false, msg: "Forbidden" });
    }
    next();
}


export const isReader = (req, res, next) => {
    console.log(`inside isReader`, req.user);
    console.log(req.user.person)
    if (req.user.person != 'reader') {
        // return next(new ErrorResponse("Forbidden", 403));
        return res.status(403).json({ success: false, msg: "Forbidden" });
    }
    next();
}