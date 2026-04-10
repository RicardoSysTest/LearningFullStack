# Listen All the Request

Que pasa cuando tenemos direcciones que no existan definidas en nuestra applicacion. Para Gestionar este escenario debemos ir a nuestro archivo de `api.js` y la final de todas las rutas le vamos a pasar `app.ge(*)` donde el `*` indica que se quiere manaejra todas las rutas que no se encuentran definidas
```js
app.get('/',user.list)
app.post('/',user.create)
app.get('/:id',user.get)
app.put('/:id',user.update)
app.patch('/:id',user.upate)
app.delete('/:id',user.destroy)

app.get('*',(req,res)=>{
    res.status(404).send('Esta pagina no existe')
})

app.post('*',(req,res)=>{
    res.status(404).send('Esta pagina no existe')
})
```