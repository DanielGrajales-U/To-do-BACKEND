const { errorHandlers } = require('../handlers/errorHandlers');
const { getByUserName } = require('../../../database/services/user.service') 

const loginUser = async (req, res) => {

	try {
		const { userName, password } = req.body;

        const userModel = await getByUserName(userName, password)
        if(!userModel) {
			return res.status(409).json(errorHandlers()
				.functionNotFound("User dont exists."));
		}

        if(!userModel.password) {
            return res.status(403).json(errorHandlers()
				.functionNotFound("Wrong Password."));
        }
        
        res.status(200).json({
			success: true,
			message: "User Loged successfull.",
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
	loginUser,
};