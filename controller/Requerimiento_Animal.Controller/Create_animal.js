const modelRequerimientos_animales= require('../../models/AnimalesRequiridos.Model/animales.model')
const estructuraApi = require('../../helpers/estructuraApi') 

exports.createAnimal =async (req, res) =>{
    const api = new estructuraApi()
    dtoFases  = req.body 
    const newFase = await modelRequerimientos_animales.create(dtoFases)
    api.setResultado(newFase)
    api.setEstado('SUC-001', 'success','Registro realizado con exito')
    res.json(api.toResponse())
}