const modelMunicipio = require('../../models/Municipio.Model/municipio.model.js')
const estructuraApi = require('../../helpers/estructuraApi')

exports.UpdateMunicipio = async(request , response )=>{
    const api = new estructuraApi()
    const idParams = request.params.id_municipio
    requestMunicipio = request.body
    await modelMunicipio.update(
        requestMunicipio
        ,{
            where: {
            id_municipio: idParams
        }}
    ).then(succ =>{
        if (succ[0] > 0) {
            api.setResultado(requestMunicipio)
        }else{
            api.setEstado(204,'Empty',"consult success but Empty")
        }
    }).catch(err =>{
        api.setEstado(err.parent || err,'error',err.parent.detail || err)
    })
    response.json(api.toResponse())
}