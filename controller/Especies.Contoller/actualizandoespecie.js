const estructuraApi = require('../../helpers/estructuraApi')
const Especie = require('../../models/Especie.Model/especie')

exports.updateEspecie = async (req, res) => {
    let api = new estructuraApi();
    const id_especie = req.params.id_especie;
    const nombre_especie = req.body;
    console.log(nombre_especie);
    await Especie.update(nombre_especie, { where: { id_especie: id_especie } })
    .then(data => {
        console.log(data);
        if (data[0] > 0) {
            
            api.setResultado(data )
            api.setEstado('seuccess', 'guardad', 'Se ha actualizado  la especie')
            
        }else{
            api.setEstado('Error', 'Error', 'No se pudo Actualizar la especie')

        }
    }).catch(error => {
        api.setEstado('Error', 'Error', error)
    })

    res.json(api.toResponse())
}