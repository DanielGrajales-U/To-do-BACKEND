const userModel = require('../models/user/userModel')
const bcryptjs = require('bcryptjs')

const getInfoUser = async (id) => {
    const response = await userModel.findById(id)
    return response
}  

const getByUserName = async (userName, password) => {
    const response = await userModel.findOne({userName})

    if(response){
        const confirmPwd = await bcryptjs.compare(password, response.password)
        response.password = confirmPwd
    }
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
    getByUserName,
    verifyExistUser,
    createUser
}