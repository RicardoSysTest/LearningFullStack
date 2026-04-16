
const Users = require('./User') //Import the Users model
const User={
 get:(req,res)=>{
    res.status(200).send('This a user')
 },
 list:async(req,res)=>{
    const users = await Users.find()
    res.status(200).send(users)
 },
 create:(req,res)=>{
    res.status(201).send('Create User')
 },
 update:(req,res)=>{
    res.status(204).send('Delete User')
 },
 destroy:(req,res)=>{
    res.status(204).send('Delete User')
 }
}

module.exports = User;