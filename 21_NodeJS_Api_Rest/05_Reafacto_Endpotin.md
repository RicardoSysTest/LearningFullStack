# Refacto and Endpoint

Vamos a refactorizar nuesto endpoind. Por el momento no tenemos muchas lineas de codigo pero para evitar en un futuro tener un desorden en nuestro proyecto nos conviente refactorizar los handlser que hemos creado. Para ello vamos a crear un archivo  llamado `user.handler.js`. Dentro de este archivo  vamos a crear una variable constante llamada User a la cual le vamos a crar la propiedad de list la cual vamos a usar para listar a los usuarios
```js
const User = {
    list:(req,res)=>{
        res.status(200).send('Hello User')
    },
}
```
Ahora vamos a agregar la propiedad de create, update and destory(delete):
```js
const User = {
    list:(req,res)=>{
        res.status(200).send('Hello User')
    },
    crate:(req,res)=>{
        res.status(201).send('Create User')
    },
    update:(req,res)=>{
        res.status(204).send('Update User')
    }
    ,
    destroy:(req,res)=>{
        res.status(204).send('Delete User')
    }
}
```
El siguiente paso sera realizar un export de este objeto de usuario. y para exportarlo nosotros vamos llamar `module.export`:
```js
const User = {
    get:(req,res)=>{
        res.status(200).send('this a user')
    },
    list:(req,res)=>{
        res.status(200).send('Hello User')
    },
    create:(req,res)=>{
        res.status(201).send('Create User')
    },
    update:(req,res)=>{
        res.status(204).send('Update User')
    }
    ,
    destroy:(req,res)=>{
        res.status(204).send('Delete User')
    }
}

/*Cuando importemos el archivo user vamos a recibir un objetdo
de usuario*/
module.exports = User
```
En nuestro archivo de `api.js` vamos a importar el user handler. Usaremos la palabra reservadad `require` y como parametro escibiremos el `./` indicamos que dentro del proyecto vamos a importar un archivo y no un modulo que se encuentra dentro de la carpeta de `node_modules`

```js
const express = require('express')
const user = require('./user.handler')
const app = express()
const port = 3000
```
Vamos a refactorizar nuestras funciones. Para `GET` la actualizamos a: 
```js
app.get('/',user.list)
app.post('/',user.create)
app.get('/:id',user.get)
app.put('/:id',user.update)
app.patch('/:id',user.upate)
app.delete('/:id',user.destroy)
```