import { Reader } from "../models/Reader.js"

export const getMyProfile = async (req, res, next) => {
    try {
        console.log(req.user.id)
        const userInfo = await Reader.findOne({ where: { id: req.user.id } });
        res.status(200).json({ success: true, data: userInfo });
    } catch (error) {

    }
}

export const getReaderProfile = async (req, res, next) => {
    try {
        const userInfo = await Reader.findOne({ where: { id: req.params.id } });
        res.status(200).json({ success: false, data: userInfo });
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}


export const getAllReaders = async (req, res, next) => {
    try {
        const readers = await Reader.findAll({});
        return res.status(200).json({ success: true, data: readers });
    } catch (error) {
        return res.status(500).json({ success: false, msg: error.message });
    }
}

export const likeReview = async (req, res, next) => {
    // find review First
}




export const getAllFollowers = async (req, res, next) => {

}


export const sendFriendRequest = async (req, res, next) => {

}

export const acceptFriendRequest = async (req, res, next) => {

}

export const declineFriendRequest = async (req, res, next) => {

}


export const getAllFollowing = async (req, res, next) => {

}

export const addNewFollowing = async (req, res, next) => {

}

export const deleteFollowing = async (req, res, next) => {

}

export const deleteFollower = async (req, res, next) => {

}

export const changeAccountPrivacy = async (req, res, next) => {

}


export const sendClubJoinRequest = async (req, res, next) => {

}


export const leaveClub = async (req, res, next) => {

}
