
/**
 *@Author Yousef Meska
 *@access private
 *@route POST `/api/v1/club/create` 
 *@body {userId, name, description, privacy}
*/

export const createClub = async (req, res, next) => {
	try {
		const { name, description, privacy, category } = req.body;
		const newClub = await Club.create({
			name,
			description,
			privacy,
			readerId: req.user.id,
			category
		})

		// mail
		// sendMail({to: userId, text: `the club has been created!`});
		// io.to(userId).emit(`newClub`, `the club has been created!`);
		return res.status(200).json({ success: true, data: newClub })
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


// // club_invitaion
// | clubId | readerId | invitaionLink | accepted |
// | 1 | 1 | 				| F |
// | 1 | 2 |               | F |
// 	// if

// 	club /: token

export const sendAnInvitation = async (req, res, next) => {
	// change accepted to T
	if (accepted === 'T') {
		const newMember = await Club.addToClub(req.user.id)
	}
}

export const acceptOrDeclineInvitation = async (req, res, next) => {
	/// authenticated user should have a nofitication
	// query invitation table, and change the accepted or let it remain the same
	// send notifiaction to the club owner (of the response)
}


// // reader is owner of many clubs
// // club is owned by one onwer


// // clubOwner (reader) => friends => invitaionLink to his friends
// // frien will get notification about his friend invited him to join ${clubName}
// // <accept, decline>


// User has many notifications
// every notification is from: req.user.id, to: readerId, subject: , type: [comment, like, friendRequest, ...], seen [T, F], link


// | notificationId | from | to | subject | type | seen | link |
// | 1 | 1 | 2 | `${req.user.id} has commented on your ${post}` | comment | F | FROM frontend |   