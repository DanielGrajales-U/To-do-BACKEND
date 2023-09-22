const mongoose = require('mongoose');
const regexProvider = require('../../../regex/regex');

const userSchema = new mongoose.Schema({
  
  userName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 15,
    match: regexProvider.nameRegex
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: regexProvider.emailRegex
  },
  password: {
    type: String,
    required: true,
    minlength:8,
  },
  board:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Board' 
  }]
});

module.exports = mongoose.model('User', userSchema, 'user')