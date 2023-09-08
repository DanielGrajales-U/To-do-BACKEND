const { Router } = require('express')
const login = require('./Session/Login.routes')
const signup = require('./Session/Signup.routes')

const routerv1 = Router() 
routerv1.use('/auth', login)
routerv1.use('/signup', signup)

module.exports = routerv1