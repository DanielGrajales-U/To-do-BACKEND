const jwt = require('jsonwebtoken')
const { errorHandlers } = require('../handlers/errorHandlers');
const { getUserAuth } = require('../../../database/services/user.service') 

const authUser = async (req, res) => {

	try {
		const { email, password} = req.body;
		
        const userModel = await getUserAuth(email, password)
        if(!userModel) {
			return res.status(409).json(errorHandlers()
			.functionNotFound("User dont exists."));
		}
        if(!userModel.confirmPwd) {
			return res.status(403).json(errorHandlers()
			.functionNotFound("Wrong Password."));
        }
		const token = jwt.sign({_id: userModel._id}, 'my_secret_key', {expiresIn: '24h'})
        res.status(200).json({
			success: true,
			message: "User Loged successfull.",
			data: {
				id: userModel._id,
				userName: userModel.userName,
				email: userModel.email,
				board: userModel.board
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