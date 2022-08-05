import { Club, ClubMembers, ClubPost } from '../models/Club.js'
import { Reader } from '../models/Reader.js';
/**
 *@Author Yousef Meska
 *@access private
 *@route POST `/api/v1/club/create` 
 *@body {userId, name, description, privacy}
*/

export const createClub = async (req, res, next) => {
	try {
		const { title, privacy, status, summary } = req.body;
		console.log(req.user.id);
		const newClub = await Club.create({
			title,
			privacy,
			status,
			summary,
			createdBy: req.user.id,
		})

		const addNewMember = await ClubMembers.create({
			readerId: req.user.id,
			type: "admin",
			clubId: newClub.id
		})

		// mail
		// sendMail({to: userId, text: `the club has been created!`});
		// io.to(userId).emit(`newClub`, `the club has been created!`);
		return res.status(200).json({ success: true, data: newClub, member: addNewMember })
	} catch (error) {
		return res.status(500).json({ success: false, msg: error.message });
	}
}


export const joinClub = async (req, res, next) => {
	// notifiy clubOwner
	//
}
/**
//  * @description club owner can add another member as role
//  * @access private
// */

// // club_members
// | clubId | readerId | role |
// | 1 | 1 | 'member' |
// | 1 | 2 | 'owner' |
// | 2 | 1 | 'admin' |
export const addToClub = async (req, res, next) => {
	// group owner only should add
	const club = await Club.findByPk(req.params.clubId)
	if (club.readerId === req.user.id) {
		// do it
	} else {
		return res.status(403).json({ success: false, msg: "You are not authorized" });
	}
}

export const listClubMembers = async (req, res, next) => {
	try {
		const members = await ClubMembers.findAll({
			where: {
				clubId: req.params.clubId
			},
			include: [
				{ model: Reader }
			]
		})

		return res.status(200).json({ success: true, data: members });
	} catch (error) {
		return res.status(500).json({ success: false, msg: error.message });
	}
}

export const createPost = async (req, res, next) => {
	const { clubId, text } = req.body;
	try {
		const newPost = await ClubPost.create({
			readerId: req.user.id,
			text,
			clubId
		})
		newPost.save();
		return res.status(201).json({ success: true, data: newPost });
	} catch (e) {
		res.status(500).json({ success: false, msg: e.message });
	}
}

export const getAllClubPosts = async (req, res, next) => {
	const { clubId } = req.params
	try {
		const posts = await ClubPost.findAll({
			where: {
				id: clubId
			},
			include: [
				{
					model: Reader
				}, {
					model: Club
				}]
		})
		return res.status(200).json({ success: true, data: posts });

	} catch (error) {
		return res.status(500).json({ success: false, e: error.message });
	}
}

/**
 * @desc club owner can list all of the join requests of the club
 * @route GET `/api/v1/club/:clubId/list/joins
 * @access private [only club owner can]
 * @body {}
 * @param {clubId} 
 */


export const listAllJoinRequests = async (req, res, next) => {

}

export const transferOwnership = async (req, res) => {

}

export const approveJoinRequest = async (req, res, next) => {

}


export const declineJoinRequest = async (req, res, next) => {

}

export const removeMemberFromClub = async (req, res, next) => {

}







































// // club_invitaion
// | clubId | readerId | invitaionLink | accepted |
// | 1 | 1 | 				| F |
// | 1 | 2 |               | F |
// 	// if

// 	club /: token

// export const sendAnInvitation = async (req, res, next) => {
// 	// change accepted to T
// 	if (accepted === 'T') {
// 		const newMember = await Club.addToClub(req.user.id)
// 	}
// }

// export const acceptOrDeclineInvitation = async (req, res, next) => {
// 	/// authenticated user should have a nofitication
// 	// query invitation table, and change the accepted or let it remain the same
// 	// send notifiaction to the club owner (of the response)
// }


// // reader is owner of many clubs
// // club is owned by one onwer


// // clubOwner (reader) => friends => invitaionLink to his friends
// // frien will get notification about his friend invited him to join ${clubName}
// // <accept, decline>


// User has many notifications
// every notification is from: req.user.id, to: readerId, subject: , type: [comment, like, friendRequest, ...], seen [T, F], link


// | notificationId | from | to | subject | type | seen | link |
// | 1 | 1 | 2 | `${req.user.id} has commented on your ${post}` | comment | F | FROM frontend |   