const modelEspecie = require('../../models/Especie.Model/especie')
const estructuraApi = require('../../helpers/estructuraApi')


exports.createEspecie = async (req, res) => {
    let api = new estructuraApi()
    const especie = req.body

    console.log(especie);

    // const form = {
    //     especie
    // }

    const newEspecie = await modelEspecie.create(especie)

    if (newEspecie) {

        api.setResultado(especie)
        api.setEstado("success", "success", "se ah creado exitosamente la especie")
    } else {
        api.setEstado("error", "error", "ha susedido un error no se ah podido crear la especie")
    }

    res.json(api.toResponse())

}

//nadie lo esta utilizando

// exports.getEspecies = async (req, res) => {
//    // let api = new estructuraApi()

//     const { id_especie } = req.params
//     const especie = await modelEspecie.findAll({
       
//     })
//     res.json(especie)

// }



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




