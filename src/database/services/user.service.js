const userModel = require('../models/user/userModel')
const bcryptjs = require('bcryptjs')

const getUser = async () => {
    const response = await userModel.find({}).populate('board',
    {
        name: 1,
        todos: 1
    })
    return response
}

const getInfoUser = async (id) => {
    const response = await userModel.findById(id).populate('board',{
        name: 1
    })
    return response
}  

const getUserAuth = async (email, password) => {
    let response = await userModel.findOne({email})
    
    if(response){
        response.confirmPwd = await bcryptjs.compare(password, response.password)
    }
    return response
}

const verifyExistUser = async (email) => {
    const response = await userModel.findOne({ email })
    return response
}

const createUser = async (data) => {
    const dataCopy = data
    dataCopy.password = await bcryptjs.hash(data.password, 10)
    

    const response = await userModel.create(dataCopy)
    return response._id
}

module.exports = {
    getUser,
    getInfoUser,
    getUserAuth,
    verifyExistUser,
    createUser
}