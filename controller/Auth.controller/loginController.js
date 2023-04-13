const bcrypt = require('bcrypt');
const modelUser = require('../../models/User.Model/user.model')
const jwt = require('../../controller/Auth.controller/token');


exports.LoginUser = async(request,response) => {
    const {body} = request
    const {identificacion , pasword} = body
    //consult de user
    const user= await modelUser.findOne({where: {identificacion:identificacion}})

    const passwortCorrect =//use ternarias
    user === null //condition
    ?
    false //si es true
    : await bcrypt.compare(pasword , user.contrasena) //si es false
    /*second validate pasword if pasword */

    if (!(identificacion && passwortCorrect)) {
        response.status(401).json({
            error : 'invalid identificacion or password'
        })
    }else{
        let jsontoken = new jwt()

        let userForToken = {
            id : user.id_usuario,
            identificacion : user.identificacion,
            pasword : user.contrasena,
        }
        let token = jsontoken.sing(userForToken)
        response.send({
            userForToken : userForToken,
            token : token
        })
    }
}