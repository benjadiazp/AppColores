const
    {
        agregarUsuario: modelAgregarUsuario,
        obtenerLista: modelObtenerLista,
        obtenerUsuario: modelObtenerUsuario,
        eliminarUsuario: modelEliminarUsuario
    } =  require('../models/usuarios');

function agregarUsuario(usuario)
{
    // Llamar a la capa modelo
    return modelAgregarUsuario(usuario).then(resultado => {
        return {status: 200, message: resultado};
    });
};

function obtenerLista()
{
    return modelObtenerLista().then(resultado => {
        return {status: 200, body: resultado};
    });
};

function obtenerUsuario(usuario)
{
    return modelObtenerUsuario(usuario).then(resultado => {
        return {status: 200, body: resultado};
    });
}

function eliminarUsuario(usuario)
{
    return modelEliminarUsuario(usuario).then(resultado => {
        return {status: 200, body: resultado};
    })
}



module.exports = {
    agregarUsuario,
    obtenerLista,
    obtenerUsuario,
    eliminarUsuario
}
