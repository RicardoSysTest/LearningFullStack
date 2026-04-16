
### Buscar Todos los Elementos

```js

const buscarTodo = async() =>{
    //Search Everything that is in the collection
    //this will return array of alld the user conentes.
    const user = await User.find()
    console.log(user)
}

buscarTodo()
```

### Buscar Elementos
Find plus the parameter of the user name. This function 
will request to search in the DB all the elements the fit
in the search request, means all the elements atha are `chanito feliz`
```js

const buscar = async() =>{
    //Buscar por la propiedad de username
    const user = await User.find({username:'chancnito feliz'})
    console.log(user)
}
buscar()
```

### Buscar un Solo elemento: 
```js

const buscarUno = async() =>{
    //Buscar por la propiedad de username
    const user = await User.findOne({username:'chancnito feliz'})
    console.log(user)
}
buscarUno()
```
En caso de no encontrar el objeto nos debolvera el valor de null

### Update Resorcer in Momgo
```js

const actualizar = async() =>{
    //Buscar por la propiedad de username
    const user = await User.findOne({username:'chancnito feliz'})
    user.edad = 30
    await user.save()
    console.log(user)
}
actualizar()
```

## Eliminar un registro

```js

const eliminar = async() =>{
    //Buscar por la propiedad de username
    const user = await User.findOne({username:'chancnito triste'})
    console.log(user)
    await user.remove()
    
}
eliminar()
```

Validar que el recurso exista antes de eliminarlo
```js

const eliminar = async() =>{
    //Buscar por la propiedad de username
    const user = await User.findOne({username:'chancnito triste'})
    console.log(user)
    if(user)
    {
        await user.remove()
    }  
}
eliminar()
```