# Add Put Patch Delete

Al agregar el endpotin de Put hemos agregado como path  `:id`, esto es que hemos agregado un dato variable. 
```js
    app.put('/:id',(req, res)=>{
        res.sendStatus(204)
    })
```
En la funcion hemos definimo que enviarmos el status `sendStatus()` para los verbos anteriores hemos colocado el status usando el metodo de `status`. Sin embargo `sendStatus()` solo te devolvera el estado.

Ahora vamos copiar esta linea y vamos a cambiar el verbo a `patch`:
```js
    app.put('/:id',(req, res)=>{
        res.sendStatus(204)
    })

    app.patch('/:id',(req, res)=>{
        res.sendStatus(204)
    })
```

Agregamos el verbo de `delete`:
```js
    app.put('/:id',(req, res)=>{
        res.sendStatus(204)
    })

    app.patch('/:id',(req, res)=>{
        res.sendStatus(204)
    })

    app.delete('/:id',(req, res)=>{
        res.sendStatus(204)
    })
```

Supongamos que queremos obtener el valor de la variable id que hemos definido en el enpoind en el cuerpo (BODY) de lo que nos ha respondido el servidor. Podemos comenzar actualizando el endpoint de put:
```js
    app.put('/:id',(req, res)=>{
        res.sendStatus(204)
        //Nos va a mostrar el contenido del request
        console.log(req)
    })

    app.patch('/:id',(req, res)=>{
        res.sendStatus(204)
    })

    app.delete('/:id',(req, res)=>{
        res.sendStatus(204)
    })
```  

Al examinar el log, nos daremos cuenta que hay un parametro llamado params. Asi que vamos a filtrar todo el log del request y solo vamos a ver el contenido de params.
```js
    app.put('/:id',(req, res)=>{
        res.sendStatus(204)
        //Nos va a mostrar el contenido del request
        console.log(req.params)
    })

    app.patch('/:id',(req, res)=>{
        res.sendStatus(204)
    })

    app.delete('/:id',(req, res)=>{
        res.sendStatus(204)
    })
```  

Por ultimo vamos a crear el endpoint de GET.
```js
    //Listar
    app.get('/:id',(req, res)=>{
        //Esto nos devolvera un objeto con la propiedad de ID
        res.sendStatus(200).send(req.params)
    })

   //Crear
    app.put('/:id',(req, res)=>{
        res.sendStatus(204)
        //Nos va a mostrar el contenido del request
        console.log(req.params)
    })

    //Actualizar
    app.patch('/:id',(req, res)=>{
        res.sendStatus(204)
    })

    //Eliminar
    app.delete('/:id',(req, res)=>{
        res.sendStatus(204)
    })
```