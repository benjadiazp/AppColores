var express = require('express');
var router = express.Router();

const {
    agregarColor,
    obtenerLista,
    obtenerColor,
    eliminarColor
} = require('../controllers/colores');

router.get('/', function(req, res)
{
    obtenerLista().then(resultado => {
        res.status(resultado.status);
        res.json(resultado.body);
    });
});

router.post('/', function(req, res)
{
    agregarColor(req.body).then(resultado => {
        res.status(resultado.status);
        res.json(resultado.message);
    });
});

router.get('/:color', function(req, res)
{
    obtenerColor(req.params.color).then(resultado => {
        res.status(resultado.status);
        res.json(resultado.body);
    })
});

router.delete('/:color', function(req, res)
{
    eliminarColor(req.params.color).then(resultado => {
        res.status(resultado.status);
        res.json(resultado.body);
    })
});

router.put('/:color')
{

}
module.exports = router;
