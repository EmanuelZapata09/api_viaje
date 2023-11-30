const {Router} = require('express')
//Desestructuración. Extraer un atributo de un objeto

const route = Router() 

//Importar métodos del controlador
const {viajeGet, viajePost, viajePut, viajeDelete} = require('../controllers/viaje')

route.get('/', viajeGet) //Listar Datos

route.post('/', viajePost) //Insertar Datos

route.put('/', viajePut) //Modificar Datos

route.delete('/', viajeDelete) //Eliminar Datos

module.exports = route