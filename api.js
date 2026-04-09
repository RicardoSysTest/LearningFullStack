const express = require('express')
const app = express()
const port = 3000

//If you recive a request send 200 "OK" and the message "Hello..."
app.get('/',(req,res)=>{
    res.status(200).send("Hello Express Framework")
})

// Execute Application (Start Listening a request)
app.listen(port, ()=>{
    console.log("Started Application")
})