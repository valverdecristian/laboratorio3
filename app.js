import restar, { multiplicar, sumar } from "./calculadora.js"
import {sumar as sumarCadenas} from "./cadenas.js";

// llamo a sumar
console.log(sumar(3,5));
console.log(restar(3,5));
console.log(multiplicar(3,5));


console.log(sumarCadenas(3,5));

// llamo a lo exportado por default
console.log(restar(4,2));

// esta es la manera de modularizar nuestras funciones