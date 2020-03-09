var express = require('express');
var router = express.Router();

const {
    agregarUsuario,
    obtenerLista,
    obtenerUsuario,
    eliminarUsuario
} = require('../controllers/usuarios');

router.get('/', function(req, res)
{
    obtenerLista().then(resultado => {
        res.status(resultado.status);
        res.json(resultado.body);
    });
});

router.post('/', function(req, res)
{
    agregarUsuario(req.body).then(resultado => {
        res.status(resultado.status);
        res.json(resultado.message);
    });
});

router.get('/:usuario', function(req, res)
{
    obtenerUsuario(req.params.usuario).then(resultado => {
        res.status(resultado.status);
        res.json(resultado.body);
    })
});

router.delete('/:usuario', function(req, res)
{
    eliminarUsuario(req.params.usuario).then(resultado => {
        res.status(resultado.status);
        res.json(resultado.body);
    })
});

module.exports = router;
