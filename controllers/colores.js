const
    {
        agregarColor: modelAgregarColor,
        obtenerLista: modelObtenerLista,
        obtenerColor: modelOBtenerColor,
        eliminarColor: modelEliminarColor
    } =  require('../models/colores');

function agregarColor(color)
{
    // Llamar a la capa modelo
    return modelAgregarColor(color).then(resultado => {
        return {status: 200, message: resultado};
    });
};

function obtenerLista()
{
    return modelObtenerLista().then(resultado => {
        return {status: 200, body: resultado};
    });
};

function obtenerColor(color)
{
    return modelOBtenerColor(color).then(resultado => {
        return {status: 200, body: resultado};
    });
}

function eliminarColor(color)
{
    return modelEliminarColor(color).then(resultado => {
        return {status: 200, body: resultado};
    })
}



module.exports = {
    agregarColor,
    obtenerLista,
    obtenerColor,
    eliminarColor
}
