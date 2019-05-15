const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const keys = require('./config/keys')

console.log(keys)

mongoose.connection.openUri(`mongodb://${keys.mongoRootusername}:${keys.mongoPassword}@${keys.mongoHost}:${keys.mongoPort}/${keys.mongoDatabase}`, (err, res) => {
    if(err) throw err
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'Online')
})

let app = express()

app.use(function(req, res, next) {
	'mongodb://nostradatos:r8jvpa9ks@nostradatos.arus.com.co:27018/nostradatos'
	
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE, OPTIONS");
	next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const usuarioRoutes = require('./routes/usuario')

app.use('/usuario',usuarioRoutes)

app.listen(PORT=5000, () => {
    console.log('Aplicación corriendo en el puerto 5000. \x1b[32m%s\x1b[0m','Online')
})