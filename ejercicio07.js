// Ejercicio 7: Comprobacion de Numero Par
// Declara una funcion llamada "esPar" que acepte un parametro "numero" y retorne verdadero si el numero es par, de lo contrario falso

function esPar(numero) {
    return numero % 2 === 0;
}

// Exporta la funcion para que pueda ser utilizada en las pruebas
module.exports = {
    esPar
};
