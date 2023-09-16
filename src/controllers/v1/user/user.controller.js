const { errorHandlers } = require('../handlers/errorHandlers');
const { getInfoUser, getUser } = require('../../../database/services/user.service'); 

const getInfUser = async (req, res) => {
	const { id } = req.params

	try {
		const userModel = getInfoUser(id)
		if (!userModel) {
			return res.status(404).json(errorHandlers()
				.functionNotFound("User not exists."));
		}

		res.status(200).json({
			success: true,
			message: "User find successfully.",
			data: {
				userModel
			}
		});
	} catch (e) {
		res.status(500).json(errorHandlers().internalErrorServer());
	}
};

const getUsers = async (req, res) => {

	try {
		const userModel = await getUser()
		if (!userModel) {
			return res.status(404).json(errorHandlers()
				.functionNotFound("Users empty."));
		}

		res.status(200).json({
			success: true,
			message: "Users successfully.",
			data: {
				userModel
			}
		});
	} catch (e) {
		res.status(500).json(errorHandlers().internalErrorServer());
	}
};


module.exports = {
	getInfUser,
	getUsers
};