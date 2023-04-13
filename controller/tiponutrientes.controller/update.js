const modeltiponutrientes = require('../../models/Tiponutrientes.model/tiponutrientes.model')
const estructuraApi = require('../../helpers/estructuraApi')

exports.UpdateTipoN = async(request , response )=>{
    const api = new estructuraApi()
    const idParams = request.params.id_tipo_nutriente
    requestTipoN = request.body
    await modeltiponutrientes.update(
        requestTipoN
        ,{
            where: {
            id_tipo_nutriente: idParams
        }}
    ).then(succ =>{
        if (succ[0] > 0) {
            api.setResultado(requestTipoN)
        }else{
            api.setEstado(204,'Empty',"Tipo Nutriente no encontrado")
        }
    }).catch(err =>{
        api.setEstado(err.parent || err,'error',err.parent.detail || err)
    })
    response.json(api.toResponse())
}
