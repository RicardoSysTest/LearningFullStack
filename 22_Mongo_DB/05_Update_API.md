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

3. Una vez hemos importado la conexcion a nuesta base de datos vamos de definir nuesto modelo de usuario. Pero ahora le vamos a agregar un nombre y un apeido. Creamos otros archivo llamado `User.js`, e importamos `mongoose`
```js
const mongoose = require('mongoose')
```
Ahora definamos nuesto modelo de usario. Para ello llamamos a la funcion `model`, y le pasamos el nombre de nuestro modelo que sera `User`, el cual tendra dos atributos, el primero sera el nombre (`name`), el cual es un dato requerido y debe tener una longitud minima de tres caracteres y el segundo apeido (`lastname`)
```js
const mongoose = require('mongoose')

const Users = mongoose.model('User',{
    name: {type: String, require:true, minLegth:3},
    lastname {type: String, require:true, minLegth:3}
})
```
Por ultimo vamos a expoertar nuestros usarios con el comando `export`
```js
const mongoose = require('mongoose')

const Users = mongoose.model('User',{
    name: {type: String, require:true, minLegth:3},
    lastname {type: String, require:true, minLegth:3}
})

module.exports = Users
```
Con esto podemos usar este modelo dentro la definicion de nuestos endpoints.

4.To use the models in our api rest we need to impor de users modele at the top of the file `user.handler.js` .
```js
const Users = require('./User')
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
know list funciont is `async`. And now we can declare that we will return the `users`. 
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
To test this change we need to execute `node api.js` and from there we will see `Started Application` message wit this log in the terminal we can open PostMan and do a call to the root with the word `GET`
![alt text](img/postman_call_get.png)
And whit this method we will see the content of our model: 
![alt text](img/postman_body_get_result.png)
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