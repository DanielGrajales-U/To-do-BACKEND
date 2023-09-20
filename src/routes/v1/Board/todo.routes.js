const { Router } = require('express')
const controller = require('../../../controllers/v1')

const todo = Router()

todo.post('/addtodo', controller.addTodo)
todo.delete('/deletetodo/:boardId/:todoId', controller.removeTodoFromBoard)

module.exports = todo