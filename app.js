const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const coloresRouter = require('./routes/colores');

app.use(bodyParser.json());
app.use('/colores', coloresRouter);

app.listen(4000, () => {
    console.log("Escuchando en el puerto " + 4000);
});
