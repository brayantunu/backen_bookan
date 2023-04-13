const modelPreparaciones = require('../../models/Preparaciones.Model/preparaciones.model');
const estructuraApi = require('../../helpers/estructuraApi')

exports.createPreparaciones = async (req,res) =>{
    let api = new estructuraApi()
    const preparaciones = req.body
    console.log(preparaciones);

    const newPreparacion = await modelPreparaciones.create(preparaciones)
    if (newPreparacion) {
        api.setResultado(newPreparacion)
        api.setEstado("success", "success", "se ah creado exitosamente la preparacion")
    } else {
        api.setEstado("error", "error", "ha susedido un error no se ah podido crear la preparacion")
    }
    res.json(api.toResponse())
}
