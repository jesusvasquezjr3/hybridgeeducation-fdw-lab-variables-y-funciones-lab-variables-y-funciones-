// Ejercicio 6: Conversion de Grados Celsius a Fahrenheit
// Declara una funcion llamada "celsiusAFahrenheit" que acepte un parametro "celsius" y retorne la conversion a Fahrenheit

function celsiusAFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// Exporta la funcion para que pueda ser utilizada en las pruebas
module.exports = {
    celsiusAFahrenheit
};
