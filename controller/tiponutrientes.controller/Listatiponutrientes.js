const modeltiponutrientes = require('../../models/Tiponutrientes.model/tiponutrientes.model')
const estructuraApi = require('../../helpers/estructuraApi')

exports.ListarTN = async(req,res)=>{
    const api = new estructuraApi()

    const listanutrientes = await modeltiponutrientes.findAll()
    if(listanutrientes.length > 0){
        api.setResultado(listanutrientes)
    }else{
        api.setEstado(404,"ERROR","No se encontro ningun nutriente")
    }
    res.json(api.toResponse())
}