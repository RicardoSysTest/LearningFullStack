const moongose = require('mongoose')

moongose.connect(`mongodb+srv://ricardo_yepez_user_db:3R4y6on8724@cluster0.0yyrcsp.mongodb.net/?appName=taskmanager`)

const User = moongose.model('User',{
    userName: String,
    edad: Number,
})

const crear = async() =>{
    const user = User({userName:'Chanchito Feliz', edad: 15})
    const saveUser = await user.save()
    console.log(saveUser)
}

crear()