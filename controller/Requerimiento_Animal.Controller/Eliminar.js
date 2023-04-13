const modelRequerimientos_animales= require('../../models/AnimalesRequiridos.Model/animales.model')
const estructuraApi = require('../../helpers/estructuraApi') 

exports.Deletereq_Animal = async(req , res) => {
    let api = new estructuraApi()
    const id = req.params.id_requerimiento_animal
    const reqAnimal = await modelRequerimientos_animales.destroy ({ where: { id_requerimiento_animal : id } } )
    api.setResultado(reqAnimal)
    api.setEstado('SUC-001', 'success', 'Requerimiento animal eliminado con exito')
    res.json(api.toResponse())
}