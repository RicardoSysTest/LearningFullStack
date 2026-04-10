const User={
 get:(req,res)=>{
    res.status(200).send('This a user')
 },
 list:(req,res)=>{
    res.status(200).send('Hello Users')
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