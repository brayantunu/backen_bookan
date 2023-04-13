const modelRegion = require('../../models/Regiones.Model/Regiones.model')
const estructuraApi = require('../../helpers/estructuraApi')

exports.updateRegion = async (req, res) => {
    const api = new estructuraApi()
    dtoRegion = req.body

    const id_region = req.params.id_region
    await modelRegion.update(
        dtoRegion
        ,{
            where: {
                id_region: id_region
        }}
    )
    api.setResultado(dtoRegion)
    api.setEstado('SUC-001','success','Region actualizada con exito')
    res.json(api.toResponse())
}