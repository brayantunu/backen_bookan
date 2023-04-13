const modelMunicipio = require('../../models/Municipio.Model/municipio.model.js')
const estructuraApi = require('../../helpers/estructuraApi')

exports.CreateMunicipio = async(request , response)=>{
    let api = new estructuraApi()//instanciar
    requestMunicipios = request.body // igualo el body a mi class
    // requestUsers.contraseña = passwort
    await modelMunicipio.create(requestMunicipios).then(succ =>{
        api.setResultado(succ)
    }).catch(err => {
        api.setEstado(err.parent.code || err,'error',err.parent.detail ||err)
    })
    response.json(api.toResponse())
}