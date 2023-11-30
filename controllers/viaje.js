const {response} = require('express')

//Importación de los modelos
const Viaje = require('../models/viaje')

//Método GET de la API
const viajeGet = async (req, res = response) => {
    try {
        const { ciudadOrigen } = req.body;
        let buscar = {};

        if (ciudadOrigen) {
            buscar = { ciudadOrigen: ciudadOrigen };
        }

        const viajes = await Viaje.find(buscar);

        res.json({ viajes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};


//Método POST de la api
const viajePost = async(req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.body 
    try {
        const viaje = new Viaje(body) 
        await viaje.save() 
    } catch (error) {
        mensaje = error
        console.log(error)
    }
        res.json({
        msg: mensaje
    })
}

//Modifcación
const viajePut = async(req, res = response) => {

    const {codigo,ciudadOrigen,ciudadDestino,precioPesos,cantidadPasajeros} = req.body
    let mensaje = 'Modificación exitosa'
    try{
         await Viaje.findOneAndUpdate({codigo: codigo}, 
            {ciudadOrigen:ciudadOrigen, ciudadDestino: ciudadDestino, precioPesos: precioPesos, cantidadPasajeros: cantidadPasajeros})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}

//Eliminación
const viajeDelete = async(req, res) => {

    const {codigo} = req.body
    let mensaje = 'La eliminiación se efectuó exitosamente.'

    try{
        const viaje = await Viaje.deleteOne({codigo: codigo})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    viajeGet,
    viajePost,
    viajePut,
    viajeDelete
}