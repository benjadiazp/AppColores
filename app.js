const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const coloresRouter = require('./routes/colores');
const usuariosRouter = require('./routes/usuarios');
const jwt = require('express-jwt');
const PORT = process.env.PORT || 3000;

app.set('key', 'clavesecreta');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/colores', coloresRouter);
app.use('/usuarios', usuariosRouter);
app.use(jwt({
    secret: 'buenasbuenas',
    credentialsRequired: false
}));
app.listen(PORT, () => {
    console.log("Escuchando en el puerto " + PORT);
});
