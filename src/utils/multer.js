import multer from 'multer';
import { v4 as uuid } from 'uuid'
import path from 'path';
let profilePhoto = multer.diskStorage({
    destination: 'uploads/reader/profile',
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalName));
        ;
    }
})

let bookImage = multer.diskStorage({
    destination: 'uploads/books',
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
})

export const profileUploader = multer({ storage: profilePhoto });
export const bookImageUploader = multer({ storage: bookImage });