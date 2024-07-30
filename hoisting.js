console.log("-- VAR ------------------")
// con 'var' se puede redefinir las variables
// esto puede traer multiples problemas
// esto se soluciona con MODULOS (o clousure)
var x;
console.log(x);
var x = 20;

console.log("-- CONST ------------------")
// se debe declarar variables con let o const
// cuando guardo una referencia uso const (cuando el tipo de dato es mutable)

let vector = [2,4,6,8];

let vector2 = vector;

vector2[1] = 10;

console.log(vector); // [2,10,6,8]
console.log(vector2); // [2,10,6,8]

/* cambia ese array en ambos vectores porque apuntan a la misma direccion de memoria */

// EL HOISTING AFECTA A TODAS LAS FUNCIONES
// Funciones declaradas y funciones expresadas [ver modulo ./funciones.js]