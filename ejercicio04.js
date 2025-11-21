// Ejercicio 4: Funcion que Saluda
// Declara una funcion llamada "saludar" que acepte un parametro "nombre" y retorne un mensaje de saludo con la estructura "Hola, nombre!".

function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

// Exporta la funcion para que pueda ser utilizada en las pruebas
module.exports = {
    saludar
};
