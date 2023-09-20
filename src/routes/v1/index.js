const { Router } = require('express')
const login = require('./Session/Login.routes')
const signup = require('./Session/Signup.routes')
const board = require('./Board/Board.routes')
const todo = require('./Board/todo.routes')
const user = require('./user.routes')
const ensureToken = require('../../middlewares/ensureToken')

const routerv1 = Router() 
routerv1.use('/user', user)
routerv1.use('/auth', login)
routerv1.use('/auth', signup)
routerv1.use('/board', ensureToken, board)
routerv1.use('/todo', ensureToken, todo)

module.exports = routerv1