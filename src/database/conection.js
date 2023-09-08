const mongoose = require('mongoose');
const uri = process.env.MONGODB_TODO

const todoMongooseConnect = mongoose.connect(uri)
  .then(() => {
    console.log('✔️ Successfully connected to ToDo database')
  })
  .catch(() => {
    console.log('❌ Error conection')
  })

module.exports = {
  todoMongooseConnect
};