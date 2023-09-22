const boardModel = require('../models/todoBoard/board.model')

const getBoards = async () => {
    const response = await boardModel.find()
    console.log(response)
    return response
}

const getBoardByUser = async (userId) => {
    const response = await boardModel.find({userId})
    return response
}

const createBoard = async (data) => {
    const response = await boardModel.create(data)
    return response
}


const verifyBoardExist = async (name) => {
    const response = await boardModel.findOne({ name })
    return response
}

const updateBoardName = async (boardId, newName) => {
    try {
        const board = await boardModel.findById(boardId);
        if (!board) {
            throw new Error("Board doesn't exist");
        }

        board.name = newName;
        const updatedBoard = await board.save();

        return updatedBoard;
    } catch (error) {
        throw error;
    }
};

const deleteBoard = async (boardId) => {
    try {
        const deletedBoard = await boardModel.findByIdAndRemove(boardId);
        if (!deletedBoard) {
            throw new Error("Tablero no encontrado");
        }
        return deletedBoard;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createBoard,
    getBoards,
    getBoardByUser,
    verifyBoardExist,
    updateBoardName,
    deleteBoard
}