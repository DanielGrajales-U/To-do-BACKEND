const { errorHandlers } = require('../handlers/errorHandlers');
const { verifyExistUser, createUser } = require('../../../database/services/user.service') 

const registerUser = async (req, res) => {
    const {userName, password, email} = req.body;
    console.log(userName, password, email)

	try {
		const userModel = await verifyExistUser(userName,email)
		if (userModel) {
			return res.status(409).json(errorHandlers()
				.dataAlreadyExist("User exists."));
		}

        const response = await createUser({userName,password,email})
		res.status(200).json({
			success: true,
			message: "User create successfull.",
			data: {
				response
			}
		});
	} catch (e) {
        console.log(e)
		res.status(500).json(errorHandlers().internalErrorServer());
	}
};


module.exports = {
	registerUser,
};