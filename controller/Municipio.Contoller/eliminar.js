const modelMunicipio = require('../../models/Municipio.Model/municipio.model')
const estructuraApi = require('../../helpers/estructuraApi')

exports.Deletemunicipio = async(req , res) => {
    let api = new estructuraApi()
    const id = req.params.id_municipio
    const municipio = await modelMunicipio.destroy ({ where: { id_municipio : id } } )
    api.setResultado(municipio)
    api.setEstado('SUC-001', 'success', 'Municipio eliminado con exito')
    res.json(api.toResponse())
}