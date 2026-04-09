# Create API

1. Creamos una constante que se llame express y le vamos a pasar una funcion que se llame require a la cual le vamos agregar el parametro de express. 
```js
const express = require('express');
```
La primer parte de esta expresion es la asignacion del framweork de express. La funcion de require nos ayuda a importar dependencias de terceros que nosotros instalemos. 

2. Para inicializar la applicacion de express una vez que hemos importando la depencia necesitamos ejecutarla. Vamos crear una applicacion aprtir de la ejecucion de express
```js
const express = require('express')
const app = express()
```

3. Vamos a indicar el puerto de ejecucion a traves de la constante port:
```js
const express = require('express')
const app = express()
const port =  3000
```

4. Creamos una applicacion a la cual le vamos a pasar un string para indicar a Express cual es la ruta del navegador (`localhost:3000/`) para que ejecute la funcion que le vamos a pasar como segundo argumento. La funcion que le vamos a pasar es una fat arrow function a la cual le vamos a pasar dos argmentos ('req => request' & 'res => response')
```js
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res)=>{
    res.status(200).send('Hola Mundo')
})
```

Request contiene toda la peticion de un cliente, Response nos permite enviar cosas la usuario, muchas veces usando el metodo send (`res.send()`). El metodo status nos es un metodo que nos muestra si la respuesta fue exitosa y si viene acompañada de un dato, en este caso 200 quiere decir la respuesta esta ok. 

5.Vamos a guardar eso para ejecutar nuesta applicacion y esta escuche todas la peticiones que nosotros hagamos a traves de un explorador.
```js
const express = require('express')
const app = express()

//3. Indicar Puerto
const port = 3000

//4. Crear Aplicacion
app.get('/',(req, res)=>{
    res.status(200).send('Hola Mundo')
})

//5. Ejecutar Aplicacion
app.listen(port, ()=>{
    console.log('Started Application')
})
```

6. Guardemos nuestro programa de js y en la terminal ejecutemos nuestra aplicacion de js con el comando `node app.js`. Abrimos el explorador y escbimos el path `localhost:3000`