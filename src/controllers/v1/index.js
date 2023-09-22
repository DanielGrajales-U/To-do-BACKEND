const { authUser } = require('./Session/Login.controller')
const { registerUser } = require('./Session/Signup.controller')
const { addBoard, getAllBoards, getBoardsForUser, changeBoardName, removeBoard } = require('./Board/Board.controller')
const { addTodo,modifyTodoStatus , removeTodoFromBoard } = require('./Board/todo.controller')
const { getUsers } = require('./user/user.controller')

module.exports = {
    getUsers,
    authUser,
    registerUser,
    getAllBoards,
    getBoardsForUser,
    changeBoardName,
    removeBoard,
    addBoard,
    addTodo,
    modifyTodoStatus,
    removeTodoFromBoard
}