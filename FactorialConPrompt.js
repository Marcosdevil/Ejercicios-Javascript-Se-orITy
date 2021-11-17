/* Ejercicio 1: Algoritmo que entregue el factorial de un número dado. */

var numero = prompt("Ingrese un número no negativo por favor");

var resultado = 1;

for (i = 1; i < numero; i++) {

    resultado = resultado * (i + 1);
}
    
console.log("El factorial de ", numero, "es ", resultado);