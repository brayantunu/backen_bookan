const modelTipoNutrientes = require('../../models/Tiponutrientes.model/tiponutrientes.model')
const estructuraApi = require('../../helpers/estructuraApi')

exports.DeleteTipoNutrientes = async (request, response) => {
    let api = new estructuraApi()
    let {id_tipo_nutriente} = request.params
    await modelTipoNutrientes.destroy({ where: { id_tipo_nutriente: id_tipo_nutriente } })
        .then(succ => {
            if (succ != 0) {
                api.setEstado('SUCC', 'success', `id_tipo_nutriente{${id_tipo_nutriente}}:delete successfully`)
            } else {
                api.setEstado('INFO', 'info', `id_tipo_nutriente{${id_tipo_nutriente}}:!NO ENCONTRADO!`)
            }
        })
        .catch(err => {
            api.setEstado(err.parent.code, "error", err.parent.detail)
        })
    response.json(api.toResponse())
}