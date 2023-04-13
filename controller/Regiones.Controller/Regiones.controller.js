
const modelRegion = require('../../models/Regiones.Model/Regiones.model')
const estructuraApi = require('../../helpers/estructuraApi')

exports.createRegiones = async (req, res) => {
    let api = new estructuraApi()
    const region = req.body

    console.log(region);
    const newRegion = await modelRegion.create(region)

    if (newRegion) {
        api.setResultado(newRegion)
        api.setEstado("success", "success", "se ah creado exitosamente la region")
    } else {
        api.setEstado("error", "error", "ha susedido un error no se ah podido crear el departamento")
    }

    res.json(api.toResponse())

}


//listar




//Delete

