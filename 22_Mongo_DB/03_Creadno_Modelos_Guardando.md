# Creando y Guardando Modelos

1. Instalar la libreria de moongosse a traves del comando:
```bash
npm i -S mongoose
```
2. Crar un nuevo archivo llamado `index.js`
3. Dentor vamos a importar la libreria de moongose:
```js
const mongoose = require('mongoose')
```
4. Nos vamos conectar a nuestra de base de datos:
```js
moongoose.connect(`mongodb+srv://ricardo_yepez_user_db:3R4y6on8724@cluster0.0yyrcsp.mongodb.net/?appName=taskmanager`)
```
5.Un modelo es la definicion de como queremos que se vean nuestros documentos. Vamos a crear un modelo llamado usuario llamando al metodo de model dentro de moongose `moongose.model` pasando como parametro el nombre del modelo y el modelo (un objeto de javascript):
```js
const User = mongoose.model('User',{
    username: String,
    edad: Number,
})
```
6. Creamos una funcion asyncrona para crear los usuarios dentro de nuestra base de datos. Nota: por convencion los modelos se escriben con mayusculas pero las instancias se escriben con minusculas.
```js
 const crear = async() =>{
    const user = new User({username:"Chanchito Feliz", edad:25})
    //User save retorna una promesa por ende llamamos a .then() para indicar que acciones
    //vamos a realizar despues de haber guardado el usuario
    //user.save().then()
    const saveUser = await user.save()
    console.log(saveUser)
 }
 crear()
``` 
7. Ejecutamos `index.js` con el comando `node index.js`