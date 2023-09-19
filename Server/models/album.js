const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
    nombre: String,
    artista: String,
    descripcion: String
})

module.exports = mongoose.model('Album', albumSchema)