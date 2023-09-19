const jwt = require('jsonwebtoken')
const { errorHandlers } = require('../handlers/errorHandlers');
const { getUserAuth } = require('../../../database/services/user.service') 

const authUser = async (req, res) => {

	try {
		const { userName, password } = req.body;
		
        const userModel = await getUserAuth(userName, password)
		const token = jwt.sign({userModel}, 'my_secret_password')
        if(!userModel) {
			return res.status(409).json(errorHandlers()
				.functionNotFound("User dont exists."));
		}
        if(!userModel.confirmPwd) {
            return res.status(403).json(errorHandlers()
				.functionNotFound("Wrong Password."));
        }
        res.status(200).json({
			success: true,
			message: "User Loged successfull.",
			data: {
				id: userModel._id
			},
			token
		});
        
	} catch (e) {
        console.log(e)
		res.status(500).json(errorHandlers().internalErrorServer());
	}
};

module.exports = {
	authUser,
};