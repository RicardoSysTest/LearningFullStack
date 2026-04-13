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