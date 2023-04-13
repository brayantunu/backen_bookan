const modelRegion = require('../../models/Regiones.Model/Regiones.model')
const estructuraApi = require('../../helpers/estructuraApi')


exports.allRegiones = async(request , response ) => {
    let obj1 = new  estructuraApi()
    await modelRegion.findAll()
    .then(succ =>{
        if(succ.length > 0) {
            obj1.setResultado(succ)
        }else{
            obj1.setEstado(404 ,"No encontrado!" , "No se encontraron regiones")
        }
    }).catch(err =>{
        obj1.setEstado(err.parent.code ,"error" , err.parent.detail)
    })
    response.json(obj1.toResponse())
}