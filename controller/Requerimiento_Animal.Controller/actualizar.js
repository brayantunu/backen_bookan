const modelRequerimientos_animales= require('../../models/AnimalesRequiridos.Model/animales.model')
const estructuraApi = require('../../helpers/estructuraApi') 
var dtoFases=require("../../models/DTO/requerimientos_animales")

exports.updateFase = async (req, res) => {
    const api = new estructuraApi()
    dtoFases = req.body

    const id_fases = req.params.id_fases
    await modelRequerimientos_animales.update(
        dtoFases
        ,{
            where: {
            id_requerimiento_animal: id_fases
        }}
    ).then(succ =>{
        if (succ[0] > 0) {
            api.setResultado(dtoFases)
        }else{
            api.setEstado(204,'Empty',"consult success but Empty")
        }
    }).catch(err =>{
        api.setEstado(err.parent || err,'error',err.parent.detail || err)
    })
    res.json(api.toResponse())
}
