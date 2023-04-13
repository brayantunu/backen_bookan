const modelRegion = require('../../models/Regiones.Model/Regiones.model')
const estructuraApi = require('../../helpers/estructuraApi')

exports.DeleteRegiones = async (request, response) => {
    let api = new estructuraApi()
    let {id_region} = request.params
    await modelRegion.destroy({ where: { id_region: id_region } })
        .then(succ => {
            if (succ != 0) {
                api.setEstado('SUCC', 'success', `id_region{${id_region}}:delete successfully`)
            } else {
                api.setEstado('INFO', 'info', `id_region{${id_region}}:!NO ENCONTRADO!`)
            }
        })
        .catch(err => {
            api.setEstado(err.parent.code, "error", err.parent.detail)
        })
    response.json(api.toResponse())
}