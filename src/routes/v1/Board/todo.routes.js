const { Router } = require('express')
const controller = require('../../../controllers/v1')
const validateTodoStatus = require('../../../middlewares/validateStatus')
const validateTodo = require('../../../middlewares/validateTodo')

const todo = Router()

todo.post('/addtodo', validateTodo, controller.addTodo)
todo.put('/updatetodo', validateTodoStatus, controller.modifyTodoStatus)
todo.delete('/deletetodo/:boardId/:todoId', controller.removeTodoFromBoard)

module.exports = todo