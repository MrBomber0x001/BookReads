// import { User } from '../models/Reader.js'
import bcrypt from 'bcrypt'
import { signToken } from '../middlewares/jwt.js';
import { ErrorResponse } from '../utils/errorResponse.js';
import { Store } from '../models/Store.js';
import { Reader } from '../models/Reader.js';
export const signup = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    // search for the user with email
    try {
        const doesExist = await User.findOne({
            where: {
                email: email
            }
        })
        if (doesExist) {
            return res.status(400).json({ success: false, msg: "User Already registered" })
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })

        await newUser.save();
        const token = signToken(newUser.id);

        res.status(200).json({ success: true, data: newUser, token })
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message })
    }
}

export const login = async (req, res, next) => {
    // find user with email
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } })
        console.log(user)
        if (!user) {
            return res.status(404).json({ success: false, msg: "User is not found!" });
        }

        // check for password
        const isValid = bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(400).json({ success: false, msg: "Email/Password are invalid!" })
        }

        // sign a token 
        const token = signToken(user.id);
        res.status(200).json({ success: true, data: user, token });
    } catch (error) {
        return res.status(500).json({ success: false, msg: error.message });
    }
}

/**
 * @Author Yousef Meska
 * @desc login user [publisher / reader]
 * @route [POST] `/api/v1/auth/user/login`
 * @access public 
 */
export const login2 = async (req, res, next) => {
    if (!req.body || !req.body.method) {
        return next(ErrorResponse(`Invalid shape of request`, 400));
    }

    const data = req.body;
    let user, personType;
    /**
     * {
     *      "email",
     *       "password",
     *       "person": "mentor"
     * }
     */
    if (data.person === "publisher") {
        user = await Publisher.findOne({ where: { email: data.email } })
        personType = "publisher";
    } else if (data.person === "reader") {
        user = await Publisher.findOne({
            where: {
                email: data.email
            }
        })
        personType = "reader"
    }

    if (!user) {
        return next(ErrorResponse(`User not found!`, 404));
    }

    if (!user.isVerified) {
        return next(new ErrorResponse(`Account is not yet verified`, 401));
    }

    const isValidPassword = await bcrypt.compare(data.password, user.password);
    if (!isValidPassword) {
        return next(new ErrorResponse(`Invalid Email/Password`, 400));
    }

    const obj = {
        id: user.id,
        person: personType
    }
    const token = signInToken(obj);

    res.status(200).json({
        success: true,
        message: `User logged in successfully`,
        token
    })
}


/**
 * @Author Mohamed Khalid
 * @desc Signup Reader
 * @route [POST] `api/v1/auth/reader/signup`
 * @access public 
 */

export const signupReader = async (req, res, next) => {
    if (!req.body || req.body.method) {
        return next(new ErrorResponse(`Invalid shape of request`, 400));
    }

    const data = req.body;

    const doesExist = await Reader.findOne({ where: { email: data.email } });
    if (doesExist) {
        return next(new ErrorHandler(`this email already exists`, 409));
    }

    const hashedPassword = await bcrypt.hash(data.password, 12);

    const randToken = Math.floor(10000000 + Math.random() * 900000);
    data.verificationToken = randToken;


    if (data.isVerified) {
        data.isVerified = false
    }


    const newReader = await Reader.create({
        email: data.email,
        password: hashedPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        location: data.location,
        person: "reader"
    });

    const obj = {
        id: newReader.id,
        person: "reader"
    }

    const token = signToken(obj);

    const mail = {
        to: data.email,
        from: process.env.SENDER_MAIL,
        subject: "Please verify your email",
        html: randToken
    }

    //sendMail(mail);


    res.status(201).json({
        sucess: true,
        message: "Email created successfully, please verify your email",
        data: newReader,
        token
    })

}
/**
 * @Author Yousef Meska
 * @desc signup store
 * @route [POST] `/api/v1/auth/store/signup`
 * @access public
 * @returns 
 */
export const signupStore = async (req, res, next) => {
    if (!req.body || req.body.method) {
        return next(new ErrorResponse(`Invalid shape of request`, 400));
    }

    const data = req.body;

    try {
        const doesExist = await Store.findOne({ where: { email: data.email } });
        if (doesExist) {
            return next(new ErrorHandler(`this email already exists`, 409));
        }

        const hashedPassword = await bcrypt.hash(data.password, 12);

        const randToken = Math.floor(10000000 + Math.random() * 900000);
        data.verificationToken = randToken;


        if (data.isVerified) {
            data.isVerified = false
        }


        const newStore = await Store.create({
            email: data.email,
            password: hashedPassword,
            firstName: data.firstName,
            lastName: data.lastName,
            location: data.location,
            verificationToken: data.verificationToken,
            isVerified: data.isVerified,
            person: "store"
        });

        await newStore.save();

        const obj = {
            id: newStore.id,
            person: "store"
        }

        const token = signToken(obj);

        const mail = {
            to: data.email,
            from: process.env.SENDER_MAIL,
            subject: "Please verify your email",
            html: randToken
        }

        //sendMail(mail);


        res.status(201).json({
            sucess: true,
            message: "Email created successfully, please verify your email",
            data: newStore,
            token
        })
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}

/**
 * @Author Yousef Meska
 * @desc Verify Email
 * @route [GET] `/api/v1/auth/verify/:token`
 */
export const verifyEmail = (req, res, next) => {
    // token === verificationToken sent
    if (!req.body || !req.body.params || !req.body.method) {
        return next(new ErrorHandler(`invalid shape of requrest`, 400));
    }

    let data = req.body;
    let user;

}