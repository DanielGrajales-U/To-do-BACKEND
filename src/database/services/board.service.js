const boardModel = require('../models/todoBoard/boardModel')

const getBoards = async () => {
    const response = await boardModel.find()
    console.log(response)
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


module.exports = {
    createBoard,
    getBoards,
    verifyBoardExist
}