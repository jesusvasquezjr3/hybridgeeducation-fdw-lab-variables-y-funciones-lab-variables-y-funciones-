// Ejercicio 8: Concatenacion de Cadenas
// Declara una funcion llamada "concatenarCadenas" que acepte dos parametros, "cadena1" y "cadena2", y retorne la concatenacion de ambas cadenas

// Ejemplos:
// concatenarCadenas("Hola", "Mundo") => "HolaMundo"
// concatenarCadenas("Frase", " de prueba") => "Frase de prueba"

function concatenarCadenas(cadena1, cadena2) {
    return cadena1 + cadena2;
}

// Exporta la funcion para que pueda ser utilizada en las pruebas
module.exports = {
    concatenarCadenas
};
