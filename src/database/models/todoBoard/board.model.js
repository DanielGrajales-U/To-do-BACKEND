const mongoose = require('mongoose')
const regexProvider = require('../../../regex/regex')

const boardSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
        trim: true,
        minlength: 3,
        maxlength: 15,
        match: regexProvider.nameRegex
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    description:{
        type:String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 100,
    },
    todos: [
        {
            task:{
                type:String,
                required: true,
                trim: true,
                minlength: 4,
                maxlength:30
            },
            description:{
                type:String,
                trim: true,
                minlength: 10,
                maxlength: 100,
            },
            status:{
                type:String,
                default: 'pending'
            }
        }
    ]
})

module.exports = mongoose.model('Board', boardSchema, 'todoboard')