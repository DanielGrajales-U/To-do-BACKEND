const { Router }= require('express')
const controller = require('../../../controllers/v1/Session/Signup.controller')

const signup = Router() 

signup.post('/signup', controller.registerUser)

module.exports = signup

