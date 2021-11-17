/* Algoritmo que entregue la suceción de Fibonacci */

var primernumero = 0;

var segundonumero = 1;

var resultado = 0;


for (i = 0; i < 49; i++) {
    
    resultado = primernumero + segundonumero;
    var primernumero = segundonumero;
    var segundonumero = resultado;
    console.log(resultado);
}