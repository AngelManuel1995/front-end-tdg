const express = require('express')
const Usuario = require('../models/usuario')

let app = express()

app.post('/', (req,res) => {

    let usuario = new Usuario({
        cedula:371622,
        nombre:"Camilo",
        apellidos:"Carmona Giraldo",
        email:"camilo_giraldo82122@elpoli.edu.co",
        role:"Profesor"
    })

    usuario.save().then(data => res.json(data).status(200)).catch(err => res.status(400).json(err))

})
app.get('/', (req,res) => {

   Usuario.find().then(data => res.json(data).status(200)).catch(err => res.status(400).json(err))

})

module.exports = app