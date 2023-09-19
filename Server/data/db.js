const mongoose = require('mongoose')

const mongoConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://jorge:jorgepass@ejemplo-final-protalent.hjrzbpc.mongodb.net/EjemploFinal?retryWrites=true&w=majority')
        console.log('Conexion realizada exitosamente con MongoDb')
    } catch (err) {
        console.log('Error en la conexion a la base de datos', err)
    }
}
mongoConnect();

module.exports = mongoConnect