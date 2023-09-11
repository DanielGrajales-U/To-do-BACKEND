const { errorHandlers } = require('../handlers/errorHandlers') 
const { createBoard, verifyBoardExist, getBoards } = require('../../../database/services/board.service')


const addBoard = async (req, res) => {
    const {name, userId, todos} = req.body

	try {
		const boardModel = await verifyBoardExist(name)
		if (boardModel) {
			return res.status(409).json(errorHandlers()
				.dataAlreadyExist("Board exists."));
		}

        const response = await createBoard({name,userId,todos})
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