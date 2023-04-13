const modeltiponutrientes = require('../../models/Tiponutrientes.model/tiponutrientes.model')
const estructuraApi = require('../../helpers/estructuraApi')

exports.createTiponutrientes = async (req, res) => {
    let api = new estructuraApi()
    const tiponutrintes= req.body

    const newTiponutriente = await modeltiponutrientes.create(tiponutrintes)

    
   api.setResultado(newTiponutriente)

   api.setEstado('SUC-001','SUCCEES','Se ha registrado correctamente el tipo animal')
   res.json(api.toResponse())
    

}