# Buscar y Crear un Elemento

La peticion viene dentro del body. Solicitamos guardar dicho usuario y regresmos el ID.
```js
 create:(req,res)=>{
    console.log(req.body)
    const user = new Users(req.body)
    const saveUser = await user.save()
    res.status(201).send(saveUser._id)
 },
```

Vamos a actualizar el un usario. Para ello le vamos a pasar el id para que nos de el usuario:
```js
 update:async (req,res)=>{
   const {id} = req.params
   const user = await Users.findOne({_id:id})
   Object.assign(user,req.body)
   await user.save()
   res.sendStatus(204)
 },
```

Acualizamos destroy:
```js
 destroy:async (req,res)=>{
    const {id} = req.params
    const user = await Users.findOne({_id:id})
    if(user)
    {
        user.remove()
    }
    res.sendStatus(204)
 },
```