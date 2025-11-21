// Ejercicio 9: Calcular el promedio de 5 numeros
// Declara una funcion llamada "calcularPromedio" que acepte 5 parametros "n1", "n2", "n3", "n4", "n5" y devuelva el promedio de los 5 numeros.

function calcularPromedio(n1, n2, n3, n4, n5) {
    return (n1 + n2 + n3 + n4 + n5) / 5;
}

// Exporta la funcion para que pueda ser utilizada en las pruebas
module.exports = {
    calcularPromedio
};
