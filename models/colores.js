var lista = [
    {
        "color": "azul",
        "rgb": "#0000ff"
    },
    {
        "color": "rojo",
        "rgb": "#ff0009"
    },
    {
        "color": "amarillo",
        "rgb": "#ffd402",
        "autor": "usuario1"
    }
];

function agregarColor(color)
{
    return new Promise((resolve, reject) =>
    {
        lista.push(color);
        resolve('Color agregado, yei.');
    })
}

function obtenerLista()
{
    return new Promise((resolve, reject) =>
    {
        resolve(lista);
    });
}

function obtenerColor(color)
{
    return new Promise((resolve, reject) => {
        resolve(lista.find(elemento => {
            return elemento.color == color;
        }));
    })
}

function eliminarColor(color)
{
    return new Promise((resolve, reject) => {
        let index = lista.indexOf(lista.find(elemento => {
            return elemento.color == color;
        }));
        if (index >= 0) {
            lista.splice(index, 1);
            resolve("Color eliminado");
        }
        else resolve("No se encuentra el color");
    })
}


module.exports = {
    agregarColor,
    obtenerLista,
    obtenerColor,
    eliminarColor
};
