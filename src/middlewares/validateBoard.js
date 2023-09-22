const errorCodes = require("../enums/error_codes.enum")
const regexProvider = require("../regex/regex")

const validateBoard = (req, res, next) => {
    const {name} = req.body

    if(!name){
        return res.status(400).json({
            success: false,
            message: 'Miss data name',
            error: errorCodes.INVALID_REQUEST_BODY
        })
    }

    if(name.length < 3 || name.length > 15) {
        return res.status(400).json({
            success:false,
            message:'3 characters and a maximum of 15',
            error: errorCodes.INVALID_REQUEST_BODY
        })
    }

    if(!regexProvider.nameRegex.test(name)){
        return res.status(400).json({
            success:false,
            message:'Name invalid',
            error: errorCodes.INVALID_REQUEST_BODY
        })
    }

    next()
}

module.exports = validateBoard