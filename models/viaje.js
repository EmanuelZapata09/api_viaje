const {Schema, model} = require('mongoose')

const ViajeSchema = Schema({
    codigo: {
        type: Number,
        unique: true,
        required: [true, 'El codigo es obligatorio']
    },
    ciudadOrigen: {
        type: String,
        required: [true, 'La ciudad de origen es obligatoria']
    },
    ciudadDestino: {
        type: String,
        required: [true, 'La ciudad de destino es obligatoria']
    },
    precioPesos: {
        type: Number,
        required: [true, 'Los precios son obligatorios']
    },
    cantidadPasajeros: {
        type: Number,
        required: [true, 'La cantidad de pasajeros es obligatoria']
    },
})


module.exports = model('Viaje',ViajeSchema)
