const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref: 'userModel',
        required:true
    },
    todos: [
        {
            _id:mongoose.Schema.Types.ObjectId,
            task:{
                type:String,
                required: true
            },
            status:{
                type:String,
                enum:['pending','doing','done']
            }
        }
    ]
})

module.exports = mongoose.model('Board', boardSchema, 'todoboard')