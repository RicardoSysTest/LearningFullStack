# Update API

1. In the file `api.js` import moongose:
```js
const mongoose = require('mongoose')
```

2. After Port definition we need to paste the credential to the DB:
```js
const mongoose = require('mongoose')
const port =3000
moongose.connect(`mongodb+srv://ricardo_yepez_user_db:3R4y6on8724@cluster0.0yyrcsp.mongodb.net/?appName=taskmanager`)
```

3. Now we need to create another file call `User.js` and import moonse:
```js
const mongoose = require('mongoose')

/*
* We are requesting that name is a require data, and 
* at least should have 3 caracters.
*/
const Users = mongoose.model('User',{
    name: {type: String, require:true, minLegth:3},
    lastname {type: String, require:true, minLegth:3}
})

//Export users
module.exports = Users
```

4.To use the models in our api rest we need to open the file `user.handler.js` and at the top of the file import the user model.
```js
const User = require('./User')
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
```

5. We nee to update or function list to return all the user
from the DB. To do this we need to create constante value call
`users` and because we are using `await` we need to indicate that
know list funciont is `async`. And now we can declare that we will return the user a noteh the string `Hola Chanchito`. To test this change we need to execure `node api.js`
```js
const User = require('./User')
const User={
  /*We need to indicate that this is async function*/   
 get:async(req,res)=>{
    res.status(200).send('This a user')
 },
 /*We need to indicate that this is async function*/
 list:async(req,res)=>{
    const users = await Users.find()
    res.status(200).send(users)
 },
  /*We need to indicate that this is async function*/
 create:async(req,res)=>{
    res.status(201).send('Create User')
 },
  /*We need to indicate that this is async function*/
 update:async(req,res)=>{
    res.status(204).send('Delete User')
 },
  /*We need to indicate that this is async function*/
 destroy:async(req,res)=>{
    res.status(204).send('Delete User')
 }
}

module.exports = User;
```

6. Cuando tenemos una peticion de tipo `POST` normalmente las peticiones se regresan del body `req.body` from:
```js
 create:(req,res)=>{
    console.log(req.body)
    res.status(201).send('Create User')
 },
```
No vamos a recivir ningun dato por no hemos hecho una configuracion. Para ello regresamos al archivo `api.js` y vamos a usar un `middleware` el cual es una funcion que se va a ejecutar cuando nosotros realicemos cualquier tipo de peticion. Normalmente se ulizan para hacer alguna validacion o en este caso para podes sacar los datos del BODY. 
```js
const app express()
const port = 3000
//Toma todas las peticiones que vengan y las mete en un forma json
app.use(express.json())
```