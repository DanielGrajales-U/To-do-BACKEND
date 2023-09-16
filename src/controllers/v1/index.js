const { authUser } = require('./Session/Login.controller')
const { registerUser } = require('./Session/Signup.controller')
const { addBoard, getAllBoards } = require('./Board/Board.controller')
const { getUsers } = require('./user/user.controller')

module.exports = {
    getUsers,
    authUser,
    registerUser,
    addBoard,
    getAllBoards
}