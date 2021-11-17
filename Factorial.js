/* Ejercicio 1: Algoritmo que entregue el factorial de un número dado. */

const numero = 5;

var resultado = 1;

for (i = 1; i < numero; i++) {

    resultado = resultado * (i + 1);
}
    
console.log("El factorial de ", numero, "es ", resultado);

