const errorCodes = require("../enums/error_codes.enum")

const validateTodo = (req, res, next) => {
    const {data} = req.body

    if(!data || !data.task || !data.description){
        return res.status(400).json({
            success: false,
            message: 'Miss data',
            error: errorCodes.INVALID_REQUEST_BODY
        })
    }

    if(data.task.length < 4 || data.task.length > 40) {
        return res.status(400).json({
            success:false,
            message:'4 characters and a maximum of 30',
            error: errorCodes.INVALID_REQUEST_BODY
        })
    }

    if(data.task.length < 10 || data.task.length > 100) {
        return res.status(400).json({
            success:false,
            message:'10 characters and a maximum of 100',
            error: errorCodes.INVALID_REQUEST_BODY
        })
    }

    next()
}

module.exports = validateTodo