const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.handler')
const app = express()
const port = 3000

//Credential for DB
mongoose.connect(`mongodb+srv://ricardo_yepez_user_db:3R4y6on8724@cluster0.0yyrcsp.mongodb.net/?appName=taskmanager`)

//If you recive a request send 200 "OK" and the message "Hello..."
app.get('/',user.list)
app.post('/',user.create)
app.get('/:id',user.get)
app.put('/:id',user.update)
app.patch('/:id',user.update)
app.delete('/:id',user.destroy)

/*
In recent updates, Express has tightened how it interprets route paths. The "*" 
string literal is no longer treated as a universal wildcard. Instead, if you want 
to match all GET requests — regardless of the path — you now need to use a regular expression.

The regex matches any string, including paths with slashes, query params, or extra depth. 
It's a more precise and performant way to declare wildcard behavior.
*/
app.get(/.*/, (req,res)=>{
    res.status(404).send('Esta pagina no existe')
})


// Execute Application (Start Listening a request)
app.listen(port, ()=>{
    console.log("Started Application")
})