const express = require('express') //import express con ESM
const app = express()
require('./config/connection') //import the running database connection
require('dotenv').config();
require('./models/asoseciacion')

//code convert a json
app.use(express.json())

//listenig routres
app.use('/api',require('./router/routes_index'))

//create port
const PORT = process.env.PORT || 3003
//running port
app.listen(PORT ,(err)=>{
    if(err){
        console.log(`error serve:${err}`);
    }else{
        console.log(`serve running succefull in port: ${PORT}`);
    }
})