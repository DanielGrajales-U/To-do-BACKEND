const { authUser } = require('./Session/Login.controller')
const { registerUser } = require('./Session/Signup.controller')

module.exports = {
    authUser,
    registerUser
}