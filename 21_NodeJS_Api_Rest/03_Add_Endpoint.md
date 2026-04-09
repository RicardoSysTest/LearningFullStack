# Add and Enpoint

Un endpoin es una ruta la cual tu puede llegar, ya sea atraves de una peticion que tu puede ser realizada a través de un explorador web o una aplicacion movil. 

1. Ceamos el enpoint de post con la misma ruta que get.
    ```js
    app.post('/',(req,res)=>{
        res.status(201).send('Created Endpoint')
    })
    ```
    Cuando creamos una ruta con post usando no podemos acceder a traves del explorador en la ruta de navegacion. Usamos status 200 cuando queremos enviar un status de Ok y ademas devolver datos al cliente (string, un objeto[] o un arreglo{}). Con 201 enviamos el estado de Ok y creado. Tambien puede ser el caso que se dese usar el estus de Ok con 204 con la diferencia que este indica un estado de NO Content. 
2. Confiremos que todo funciona usando la applicacion de postman. 