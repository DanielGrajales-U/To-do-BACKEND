const { authUser } = require('./Session/Login.controller')
const { registerUser } = require('./Session/Signup.controller')
const { addBoard, getAllBoards } = require('./Board/Board.controller')

module.exports = {
    authUser,
    registerUser,
    addBoard,
    getAllBoards
}