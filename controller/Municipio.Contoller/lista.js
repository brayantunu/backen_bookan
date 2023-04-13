const modelMunicipio = require('../../models/Municipio.Model/municipio.model.js')
const estructuraApi = require('../../helpers/estructuraApi')

exports.allMunicipio = async(request , response ) => {
    let obj1 = new  estructuraApi()
     await modelMunicipio.findAll()
    .then(succ =>{
        if(succ.length > 0) {
            obj1.setResultado(succ)
        }else{
            obj1.setEstado(404 ,"No encontrado!" , "No se encontraron municipios")
        }
    }).catch(err =>{
        obj1.setEstado(err.parent.code ,"error" , err.parent.detail)
    })
    response.json(obj1.toResponse())
}