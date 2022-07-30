import { Store } from "../models/Store.js";

export const getMyProfile = async (req, res, next) => {
    try {
        console.log(req.user.id)
        const storeInfo = await Store.findOne({ where: { id: parseInt(req.user.id) } });
        res.status(200).json({ success: true, data: storeInfo });
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}

export const getStoreProfile = async (req, res, next) => {
    try {
        const userInfo = await Store.findOne({ where: { id: parseInt(req.params.id) } });
        res.status(200).json({ success: false, data: userInfo });
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}