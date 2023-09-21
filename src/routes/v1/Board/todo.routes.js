const { Router } = require('express')
const controller = require('../../../controllers/v1')
const validateTodoStatus = require('../../../middlewares/validateStatus')

const todo = Router()

todo.post('/addtodo', controller.addTodo)
todo.put('/updatetodo', validateTodoStatus, controller.modifyTodoStatus)
todo.delete('/deletetodo/:boardId/:todoId', controller.removeTodoFromBoard)

module.exports = todo