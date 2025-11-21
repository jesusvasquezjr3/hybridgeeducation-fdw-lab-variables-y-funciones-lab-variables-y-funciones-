// Ejercicio 10: Inversion de una Cadena
// Declara una funcion llamada "invertirCadena" que acepte un parametro "cadena" y retorne la cadena invertida

// Ejemplos:
// invertirCadena("Hola Mundo") // debe retornar "odnuM aloH"
// invertirCadena("anita lava la tina") // debe retornar "anit al aval atina"

function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

// Exporta la funcion para que pueda ser utilizada en las pruebas
module.exports = {
    invertirCadena
};
