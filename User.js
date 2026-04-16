/*=========================================
Define a model to be use inside the endpoints.
==========================================*/
const mongoose = require('mongoose')
const User = require('./user.handler')

const Users = mongoose.model('User',{
    name:{type: String, require:true, minLength: 3},
    lastName:{type: String, require:true, minLength: 3}
})

module.exports = Users
