const modelEspecie = require('../../models/Especie.Model/especie')
const estructuraApi = require('../../helpers/estructuraApi')

exports.allEspecies =async (req, res) =>{
    let api = new estructuraApi()
    const especie = await modelEspecie.findAll()
    if (especie.length > 0) {
        api.setResultado(especie)
    } else {
        api.setEstado(404, "ERROR", "No encontrado")
    }
    res.json(api.toResponse())
         }