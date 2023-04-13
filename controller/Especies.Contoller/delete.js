const modelEspecie = require('../../models/Especie.Model/especie')
const estructuraApi = require('../../helpers/estructuraApi')



//Delete especie
exports.DeleteEspecie = async(request , response) => {
    let api = new estructuraApi()
    let id_especie = request.params.id_especie
    await modelEspecie.destroy({where:{
        id_especie:id_especie
    }})
    .then(succ =>{
        if (succ != 0) {
            api.setEstado('SUCC','success',`id_especie{${id_especie}}:delete successfully`)
        }else{
            api.setEstado('INFO','info',`id_especie{${id_especie}}:!No encontrado!`)
        }
    })
    .catch(err =>{
        api.setEstado(err.parent.code, "error",err.parent.detail)
    })
    response.json(api.toResponse())
}




