const { errorHandlers } = require('../handlers/errorHandlers') 
const { getInfoUser } = require('../../../database/services/user.service')
const { createBoard, verifyBoardExist, getBoards } = require('../../../database/services/board.service')


const addBoard = async (req, res) => {
    const {name, userId, todos} = req.body

	const user = await getInfoUser(userId)
	
	try {
		const boardModel = await verifyBoardExist(name)
		
		if (boardModel) {
			return res.status(409).json(errorHandlers()
			.dataAlreadyExist("Board exists."));
		}
		
        const response = await createBoard({name,userId,todos})
		user.board = user.board.concat(response)
		await user.save()
		res.status(200).json({
			success: true,
			message: "Board create successfull.",
			data: {
				response
			}
		});
	} catch (e) {
        console.log(e)
		res.status(500).json(errorHandlers().internalErrorServer());
	}
};

const getAllBoards = async (req, res) => {
    try {
		const boardModel = await getBoards()
		console.log(boardModel)
		if (!boardModel) {
			return res.status(409).json(errorHandlers()
				.functionNotFound("no se encontro ningun tablero"));
		}

		res.status(200).json({
			success: true,
			message: "Showing all boards.",
			data: {
				boardModel
			}
		});
	} catch (e) {
        console.log(e)
		res.status(500).json(errorHandlers().internalErrorServer());
	}
}

module.exports = {
	addBoard,
    getAllBoards
};