const express = require('express')
const routes = require('./Server/routes/routes.js')
require('../Ejemplo-Proyecto-final/Server/data/db.js')

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/', routes)

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${3000}`)
})

