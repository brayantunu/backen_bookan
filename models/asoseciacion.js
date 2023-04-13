const especie =  require('./Especie.Model/especie')
const requerimientoAnimal = require('./AnimalesRequiridos.Model/animales.model')

especie.hasOne(requerimientoAnimal)
requerimientoAnimal.belongsTo(especie)