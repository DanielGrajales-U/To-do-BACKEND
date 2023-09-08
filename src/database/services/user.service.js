const userModel = require('../models/user/userModel')
const bcryptjs = require('bcryptjs')

const getInfoUser = async (id) => {
    const response = await userModel.findById(id)
    return response
}  

const verifyExistUser = async (userName, email) => {
    const response = await userModel.findOne({$or: [{ userName }, { email }]})
    return response
}

const createUser = async (data) => {
    const dataCopy = data
    dataCopy.password = await bcryptjs.hash(data.password, 10)
    

    const response = await userModel.create(dataCopy)
    return response._id
}

module.exports = {
    getInfoUser,
    verifyExistUser,
    createUser
}