const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const coloresRouter = require('./routes/colores');
const usuariosRouter = require('./routes/usuarios');
const jwt = require('express-jwt');

app.set('key', 'clavesecreta');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/colores', coloresRouter);
app.use('/usuarios', usuariosRouter);
app.listen(3000, () => {
    console.log("Escuchando en el puerto " + 3000);
});
