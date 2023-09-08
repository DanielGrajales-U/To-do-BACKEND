const { errorHandlers } = require('../handlers/errorHandler');
const { getInfoUser } = require('../../../database/services/user.service') 

const getUser = async (req, res) => {
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


module.exports = {
	getUser,
};