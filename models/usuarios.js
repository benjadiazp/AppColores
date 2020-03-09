var lista = [
    {
        "usuario": "usuario1",
        "clave": "clave1"
    },
    {
        "usuario": "usuario2",
        "clave": "clave2"
    }
];

function agregarUsuario(usuario)
{
    return new Promise((resolve, reject) =>
    {
        lista.push(usuario);
        resolve('Usuario agregado, yei.');
    })
}

function obtenerLista()
{
    return new Promise((resolve, reject) =>
    {
        resolve(lista);
    });
}

function obtenerUsuario(usuario)
{
    return new Promise((resolve, reject) => {
        resolve(lista.find(elemento => {
            return elemento.usuario == usuario;
        }));
    })
}

function eliminarUsuario(usuario)
{
    return new Promise((resolve, reject) => {
        let index = lista.indexOf(lista.find(elemento => {
            return elemento.usuario == usuario;
        }));
        if (index >= 0) {
            lista.splice(index, 1);
            resolve("Usuario eliminado");
        }
        else resolve("No se encuentra el usuario");
    })
}


module.exports = {
    agregarUsuario,
    obtenerLista,
    obtenerUsuario,
    eliminarUsuario
};
