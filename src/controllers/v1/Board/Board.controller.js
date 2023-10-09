const { errorHandlers } = require('../handlers/errorHandlers') 
const { getInfoUser } = require('../../../database/services/user.service')
const { createBoard, getBoards, updateBoardName, deleteBoard, getBoardByUser } = require('../../../database/services/board.service')

const getAllBoards = async (req, res) => {
	try {
		const boardModel = await getBoards()
		if (!boardModel) {
			return res.status(409).json(errorHandlers()
				.functionNotFound("No board found"));
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

const getBoardsForUser = async (req, res) => {
	const userId = req.user
	try{
		const boards = await getBoardByUser(userId)

		res.status(200).json({
			success:true,
			message: 'Get Boards successfully',
			data:{
				boards
			}
		})
	}catch(error){
		console.log(error)
		res.sendStatus(500)
	}
} 

const addBoard = async (req, res) => {
    const {name, description, todos} = req.body
	const userId = req.user._id
	
	try {
		const user = await getInfoUser(userId)
		const boardExist = user.board.some(todo => todo.name === name)
		let response;
		if(!boardExist){
			response = await createBoard({name,userId, description,todos})
			user.board = user.board.concat(response)
			await user.save()
		}else{
			return res.sendStatus(409)
		}
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

const changeBoardName = async (req, res) => {
    const { id, newName } = req.body;

    try {
        const updatedBoard = await updateBoardName(id, newName);

        res.status(200).json({
            success: true,
            message: "Board name update successfully",
            data: {
                updatedBoard,
            },
        });
    } catch (error) {
        res.status(500).json(errorHandlers().internalErrorServer());
    }
};

const removeBoard = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBoard = await deleteBoard(id);

        res.status(200).json({
            success: true,
            message: "Board delete successfully",
            data: {
                deletedBoard,
            },
        });
    } catch (error) {
        res.status(500).json(errorHandlers().internalErrorServer());
    }
};

module.exports = {
    getAllBoards,
	getBoardsForUser,
	addBoard,
	changeBoardName,
	removeBoard
};