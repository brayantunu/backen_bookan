const router = require('express').Router();
const usersControllers = require('../controller/Usuarios.Contoller/UsersController')
const loginController = require('../controller/Auth.controller/loginController')
const especieController = require('../controller/Especies.Contoller/especie.controller')
const middleware = require('../middleware/authenticationJWT')
const requerimientoAController = require ('../controller/Requerimiento_Animal.Controller/requerimientos_animalesController')
const requerimientoAControllerActulizar = require ('../controller/Requerimiento_Animal.Controller/actualizar')
const regionController = require('../controller/Regiones.Controller/Regiones.controller');
const UpdateControllerMun = require('../controller/Municipio.Contoller/Update')
const DeleteControllerEsp = require('../controller/Especies.Contoller/delete')
const updateEspecieController = require('../controller/Especies.Contoller/actualizandoespecie')
const deletemunicipiocontroller = require('../controller/Municipio.Contoller/Eliminar')
const deletereq_animalcontroller = require('../controller/Requerimiento_Animal.Controller/Eliminar')
const especieList = require('../controller/Especies.Contoller/List_especie')
// const middleware = require('../middleware/authenticationJWT')
const listRequerimientoAcontroller = require('../controller/Requerimiento_Animal.Controller/List_animal')
const createRequerimientoAcontroller = require('../controller/Requerimiento_Animal.Controller/Create_animal')
// const regionController = require('../controller/Regiones.Controller/Regiones.controller')
const DeleteControllerReg = require('../controller/Regiones.Controller/delete');
const ListarControllerReg = require('../controller/Regiones.Controller/listar');
const CreateControllerMun = require('../controller/Municipio.Contoller/Create');
const listarmunicipiocontroller = require ( '../controller/Municipio.Contoller/lista')
const municipioscontroller = require('../controller/Municipio.Contoller/municipio.controller')
const alimentosController = require('../controller/Alimentos.Contoller/alimentos.controller')
const actualizarRegionController=require('../controller/Regiones.Controller/actualizar')
const tiponutrientesContr = require('../controller/tiponutrientes.controller/creartiponutrientes')
const tiponutrientesContrdelete = require('../controller/tiponutrientes.controller/deletetiponutrientes')
const tiponutrientesUpdate = require ('../controller/tiponutrientes.controller/update')
const tiponutrientesList = require ('../controller/tiponutrientes.controller/Listatiponutrientes')
const preparaciones = require('../controller/Preparaciones.Contoller/preparaciones.controller');
const listarmunicipioController = require('../controller/Municipio.Contoller/lista')

/*routes user */
router.get('/allusers', usersControllers.allUsers)
router.post('/createUser', usersControllers.CreateUser)
router.get('/viewUser/:id_usuario', usersControllers.viewUser)
router.put('/updateUser/:id_usuario', usersControllers.UpdateUser)
router.delete('/deleteUser/:id_usuario', usersControllers.DeleteUser)
/*end routes users*/

router.put('/updateFase/:id_fases', requerimientoAControllerActulizar.updateFase)
/* route fases o requerimientos animales*/

/* route especie*/
router.post('/createEspecie',especieController.createEspecie)
router.get('/listEspecie',especieList.allEspecies)
router.delete('/deleteEspecie/:id_especie',DeleteControllerEsp.DeleteEspecie)

/* routes Requerimientos Especie*/
router.post('/crearAnimal',createRequerimientoAcontroller.createAnimal)
router.get('/listR_Animales',listRequerimientoAcontroller.listR_animales)
/* route especie*/
router.post('/createEspecie',especieController.createEspecie)
router.put('/Especie/:id_especie',updateEspecieController.updateEspecie)

/*router.get('/viewEspecie',especieController.getEspecies)*/
router.delete('/deleteEspecie/:id_especie',especieController.DeleteEspecie)
router.delete('/deletereq_animales/:id_requerimiento_animal', deletereq_animalcontroller.Deletereq_Animal)

/*router preparaciones*/
router.post('/createPreparaciones',preparaciones.createPreparaciones)

/*router municipio*/

router.get('/allmunicipios', listarmunicipioController.allMunicipio)
// router.post('/createMunicipio', municipioscontroller.CreateMunicipio)

router.put('/updateMunicipio/:id_municipio', UpdateControllerMun.UpdateMunicipio)
router.post('/createMunicipio', CreateControllerMun.CreateMunicipio)
router.delete('/deletemunicipio/:id_municipio', deletemunicipiocontroller.Deletemunicipio)
// router.put('/updateMunicipio/:id_municipio', municipioscontroller.UpdateMunicipio)

/*route Region*/
router.post('/createRegiones', regionController.createRegiones )

router.get('/allregiones', ListarControllerReg.allRegiones)
router.delete('/deleteRegiones/:id_region', DeleteControllerReg.DeleteRegiones)
router.put('/updateRegion/:id_region',actualizarRegionController.updateRegion)//actualizar


/*login*/
router.post('/login', loginController.LoginUser)
/*end login */

router.get('/allaliments', alimentosController.allAliments)
router.get('/onealiment/:id_alimentos', alimentosController.viewAliment)
router.post('/createaliment', alimentosController.createAliment)
router.put('/updatealiment/:id_alimentos', alimentosController.updateAssignment)
router.delete('/deletealiment/:id_alimentos', alimentosController.deleteAssignment)
router.get('/alimentsite/:region_id', alimentosController.AlimentsForSite)
router.get('/alimentestatus/:especie_id', listRequerimientoAcontroller.especieForEstado)

/*Tiponutrientes*/
router.post('/tipo_nutriente', tiponutrientesContr.createTiponutrientes)
router.get('/listatiponutrientes', tiponutrientesList.ListarTN)
router.delete('/tipo_nutrientes/:id_tipo_nutriente', tiponutrientesContrdelete.DeleteTipoNutrientes)
router.put('/tipo_nutrientes/:id_tipo_nutriente', tiponutrientesUpdate.UpdateTipoN)
/*end Tiponutrientes */


module.exports = router