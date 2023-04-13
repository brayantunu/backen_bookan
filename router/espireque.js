const express = require('express')
const router = express.Router()
const especie = require('../models/Especie.Model/especie')

router.get('/',(req,res)=>{
    especie.findAll().then(espireque => res.json(espireque))
})