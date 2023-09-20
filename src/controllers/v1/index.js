const { authUser } = require('./Session/Login.controller')
const { registerUser } = require('./Session/Signup.controller')
const { addBoard, getAllBoards, changeBoardName, removeBoard } = require('./Board/Board.controller')
const { addTodo, removeTodoFromBoard } = require('./Board/todo.controller')
const { getUsers } = require('./user/user.controller')

module.exports = {
    getUsers,
    authUser,
    registerUser,
    getAllBoards,
    changeBoardName,
    removeBoard,
    addBoard,
    addTodo,
    removeTodoFromBoard
}